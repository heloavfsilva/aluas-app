import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './atividade/add.component';
import { ListComponent } from './atividade/list.component';
import { EditComponent } from './atividade/edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OktaCallbackComponent, OktaAuthModule } from '@okta/okta-angular';
import { JwksValidationHandler, OAuthService, OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './shared/auth/auth.guard';

const config = {
  issuer: 'https://dev-501841.okta.com/oauth2/default',
  redirectUri: 'http://localhost:4200/implicit/callback',
  clientId: '0oabx9e2hzCcqX5MU356'
}

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: AddComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'implicit/callback',   component: OktaCallbackComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes), OktaAuthModule.initAuth(config), OAuthModule.forRoot()],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
