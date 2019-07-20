import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExperienceComponent} from './experience/experience.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'experience', pathMatch: 'full'},
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
