import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { without, findIndex } from 'lodash';
import { OktaAuthService } from '@okta/okta-angular';
import { JwksValidationHandler, OAuthService, AuthConfig  } from 'angular-oauth2-oidc';
library.add(faTimes, faPlus);


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aluas';
  isAuthenticated: boolean;

  constructor(private http: HttpClient, private oktaAuth: OktaAuthService, private oauthService: OAuthService) {
    const authConfig: AuthConfig = {
    redirectUri: window.location.origin,
    clientId: '0oabx9e2hzCcqX5MU356',
    scope: 'openid profile email',
    oidc: true,
    issuer: 'https://dev-501841.okta.com/oauth2/default'
  }
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  };

  async ngOnInit() {
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    console.log(this.isAuthenticated);
    // Subscribe to authentication state changes
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
}
