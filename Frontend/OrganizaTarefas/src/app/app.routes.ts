import { Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'tarefas', component: TarefasComponent }
];
