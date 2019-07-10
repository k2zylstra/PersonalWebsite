import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'experience', pathMatch: 'full'},
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
