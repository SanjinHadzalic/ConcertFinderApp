import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ArtistPageComponent } from './components/pages/artist-page/artist-page.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'search/:searchTerm', component:HomeComponent},
  { path: 'artist/:id', component:ArtistPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
