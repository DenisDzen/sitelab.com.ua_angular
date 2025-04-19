import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';

const routes: Routes = [
  { path: 'uk/home', component: HomeComponent },
  { path: 'en/home', component: HomeComponent },
  { path: 'uk/about', component: AboutComponent },
  { path: 'en/about', component: AboutComponent },
  { path: 'uk/services', component: ServicesComponent },
  { path: 'en/services', component: ServicesComponent },
  { path: 'uk/work', component: WorkComponent },
  { path: 'en/work', component: WorkComponent },
  { path: 'uk/blog', component: BlogComponent },
  { path: 'en/blog', component: BlogComponent },
  { path: 'uk/contact', component: ContactComponent },
  { path: 'en/contact', component: ContactComponent },
  { path: 'uk/experience', component: ExperienceComponent },
  { path: 'en/experience', component: ExperienceComponent },
  { path: 'uk/testimonials', component: TestimonialsComponent },
  { path: 'en/testimonials', component: TestimonialsComponent },
  { path: 'uk', redirectTo: '/uk/home', pathMatch: 'full' },
  { path: 'en', redirectTo: '/en/home', pathMatch: 'full' },
  { path: '', redirectTo: '/uk/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }