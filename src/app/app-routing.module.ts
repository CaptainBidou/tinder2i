import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';

const routes: Routes = [
  { path: 'main', component: ProfilComponent },

  { path: '**', redirectTo: 'main' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
