import { Routes } from '@angular/router';
import { TarefasComponent } from './tarefas/tarefas.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'tarefas', component: TarefasComponent }
];
