import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Для HTTP-запросов
import { registerLocaleData } from '@angular/common';
import localeUk from '@angular/common/locales/uk'; // Правильный импорт украинской локали
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Компоненты
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ExperienceComponent } from './main/experience/experience.component';
import { ServicesComponent } from './main/services/services.component';
import { WorkComponent } from './main/work/work.component';
import { TestimonialsComponent } from './main/testimonials/testimonials.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';

// Внешние модули
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { ScrollSpyModule } from 'ng-spy';

// Регистрация локали
registerLocaleData(localeUk, 'uk-UA');

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
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ScrollSpyModule,
    NgClickOutsideDirective,
    // RouterModule должен быть здесь если используется
  ],
  providers: [
    // Добавьте сервисы здесь при необходимости
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }