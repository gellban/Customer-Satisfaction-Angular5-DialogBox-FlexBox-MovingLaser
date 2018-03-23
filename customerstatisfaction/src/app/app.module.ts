import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RatingComponent } from './components/rating/rating.component';
import { AboutComponent } from './components/about/about.component';

import {RouterModule,Routes} from '@angular/router';
const appRoutes: Routes=[
  {path:'',component:RatingComponent},
  {path:'about',component:AboutComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    RatingComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
