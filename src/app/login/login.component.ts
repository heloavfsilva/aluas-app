import { Component, OnInit } from '@angular/core';
import * as OktaSignIn from '@okta/okta-signin-widget';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signIn: any;
  constructor() {
    this.signIn = new OktaSignIn({
      /**
       * Note: when using the Sign-In Widget for an ODIC flow, it still
       * needs to be configured with the base URL for your Okta Org. Here
       * we derive it from the given issuer for convenience.
       */
      baseUrl: 'https://dev-501841.okta.com/',
      clientId: '0oabx9e2hzCcqX5MU356',
      redirectUri: 'http://localhost:4200/implicit/callback',
      i18n: {
        en: {
          'primaryauth.title': 'Sign in to Angular & Company',
        },
      },
      authParams: {
        responseType: ['id_token', 'token'],
        issuer: 'https://dev-501841.okta.com/oauth2/default',
        display: 'page'
        // scopes: sampleConfig.oidc.scope.split(' '),
      },
    }); }

  ngOnInit() {
    this.signIn.renderEl(
      { el: '#sign-in-widget' },
      () => {
        /**
         * In this flow, the success handler will not be called because we redirect
         * to the Okta org for the authentication workflow.
         */
      },
      (err) => {
        throw err;
      },
    );
  }

}
