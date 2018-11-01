import { RouterModule } from './common';


import { SharedModule } from './shared';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';


export const SHARED_MODULES: any[] = [
   SharedModule,
   RouterModule,
   // RouterModule.forRoot(AppRoutes),

   LoginModule
];

export const COMPONENT_DECLARATIONS: any[] = [
   AppComponent
];

// export const PROVIDERS: any[] = [
//    { provide: API_KEY_TOKEN, useValue: '3b3fe2619dfd3c4e94c2d7efd24592e1' },
//    PetFinderService,
//    ...guards,
// ];