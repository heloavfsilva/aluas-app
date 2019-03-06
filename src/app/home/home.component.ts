import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { AuthGuard } from '../shared/auth/auth.guard';
import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { ChangeDetectorRef } from '@angular/core';
import * as OktaAuth from '@okta/okta-auth-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'],
})
export class HomeComponent implements OnInit {
  //isAuthenticated: boolean;
  private username: string;
  private password: string;
  private error: string;

  constructor(private oauthService: OAuthService, private changeDetector: ChangeDetectorRef) {
  }

  login() {
    this.oauthService.initImplicitFlow();

  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims: any = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims.name;
  }

  ngOnInit(){
    alert('home here!');
  }

  loginWithPassword() {
    this.oauthService.createAndSaveNonce().then(nonce => {
      const authClient = new OktaAuth({
        url: 'https://dev-501841.okta.com',
        issuer: 'default'
      });
      return authClient.signIn({
        username: this.username,
        password: this.password
      }).then((response) => {
        if (response.status === 'SUCCESS') {
          return authClient.token.getWithoutPrompt({
            clientId: this.oauthService.clientId,
            responseType: ['id_token', 'token'],
            scopes: ['openid', 'profile', 'email'],
            sessionToken: response.sessionToken,
            nonce: nonce,
            redirectUri: window.location.origin
          })
            .then((tokens) => {
              const idToken = tokens[0].idToken;
              const accessToken = tokens[1].accessToken;
              const keyValuePair = `#id_token=${encodeURIComponent(idToken)}&access_token=${encodeURIComponent(accessToken)}`;
              this.oauthService.tryLogin({
                customHashFragment: keyValuePair,
                disableOAuth2StateCheck: true
              }).then(() => {
                // notify Angular that things have changed
                this.changeDetector.detectChanges();
              });
            });
        } else {
          throw new Error('We cannot handle the ' + response.status + ' status');
        }
      }).fail((error) => {
        console.error(error);
        this.error = error.message;
      });
    });
  }
}
