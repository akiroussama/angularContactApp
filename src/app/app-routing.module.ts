import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './annuaire/contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './annuaire/contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contactList', component: ContactListComponent },
  { path: 'contactDetails/:id', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
