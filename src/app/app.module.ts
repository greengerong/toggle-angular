import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToggleModule } from 'toggle-angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { MyFeaturesFetcher } from './feature/MyFeaturesFetcher';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/features/dev'
      },
      {
        path: 'features/:env',
        component: FeatureComponent
      }
    ]),
    ToggleModule.forRoot({ fetcher: MyFeaturesFetcher })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
