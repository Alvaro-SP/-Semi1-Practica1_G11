import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { WebcamModule } from 'ngx-webcam';
import { InicioComponent } from './components/inicio/inicio.component';
import { MenuComponent } from './components/menu/menu.component';
import { VerFotosComponent } from './components/ver-fotos/ver-fotos.component';
import { AlbumComponent } from './components/album/album.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { EditarPerfilComponent } from './components/editar-perfil/editar-perfil.component';
import { SubirFotoComponent } from './components/subir-foto/subir-foto.component';
import { CrearAlbumComponent } from './components/crear-album/crear-album.component';
import { EditarAlbumsComponent } from './components/editar-albums/editar-albums.component';
import { CommonModule } from '@angular/common';
import { DetalleFotoComponent } from './components/detalle-foto/detalle-foto.component';
import { ExtraerTxtComponent } from './components/extraer-txt/extraer-txt.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    MenuComponent,
    VerFotosComponent,
    AlbumComponent,
    BarraSuperiorComponent,
    EditarPerfilComponent,
    SubirFotoComponent,
    CrearAlbumComponent,
    EditarAlbumsComponent,
    DetalleFotoComponent,
    ExtraerTxtComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    WebcamModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
