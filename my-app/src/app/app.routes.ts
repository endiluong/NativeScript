import { Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { LoginModule } from './login/login.module';


export const routes: Routes = [
  {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full',
  },
  {
      path: 'login',
      component: LoginModule,
  },
];
