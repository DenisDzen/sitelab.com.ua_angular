import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import {NgClickOutsideDirective} from 'ng-click-outside2';
import { ScrollSpyModule } from 'ng-spy';

// ✅ ДОБАВЛЕНО:
import { HttpClientModule, HttpClient } from '@angular/common/http'; // ✅ для работы с HTTP
import { TranslateModule, TranslateLoader } from '@ngx-translate/core'; // ✅ основной модуль перевода
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; // ✅ загрузчик переводов

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    ServicesComponent,
    WorkComponent,
    TestimonialsComponent,
    BlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // ✅ ОБЯЗАТЕЛЕН
    TranslateModule.forRoot({
      defaultLanguage: 'uk-UA',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollSpyModule,
    NgClickOutsideDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
