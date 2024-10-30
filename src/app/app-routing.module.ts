import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { PhotoComponent } from './photo/photo.component';
import { PopulationComponent } from './population/population.component';

const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'population', component: PopulationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
