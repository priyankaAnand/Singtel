import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListComponent } from '../zone-list/zone-list.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ZoneListComponent },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}