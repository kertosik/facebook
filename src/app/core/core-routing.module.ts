//blok angularowy
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//blok lokalnych zaleznosci
import { HomePageComponent } from './pages/home-page/home-page.component';
import { componentFactoryName } from '@angular/compiler';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "**",
    component: NotFoundPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
