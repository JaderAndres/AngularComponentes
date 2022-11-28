import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RouterModule, Routes } from '@angular/router';
import { QuienessomosComponent } from './components/quienessomos/quienessomos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { HomeComponent } from './components/home/home.component';
import { AsideComponent } from './components/aside/aside.component';


//Rutas
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'quienessomos', component: QuienessomosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'testimonios', component: TestimoniosComponent },
  {path: 'contactanos', component: ContactanosComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    QuienessomosComponent,
    ServiciosComponent,
    TestimoniosComponent,
    ContactanosComponent,
    HomeComponent,
    AsideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
