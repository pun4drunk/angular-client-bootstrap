import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from '../app/navigation/navigation.component';
import { JumbotronComponent } from '../app/jumbotron/jumbotron.component'
import { PortfolioComponent } from '../app/portfolio/portfolio.component'
import { AboutComponent } from '../app/about/about.component';
import { LocationComponent } from '../app/location/location.component';
import { SocialComponent } from '../app/social/social.component';
import { AboutFooterComponent } from '../app/about-footer/about-footer.component';
import { CopyrightComponent } from '../app/copyright/copyright.component';
import { PeopleComponent } from './people/people.component';

import { PeopleService } from './people/people.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    JumbotronComponent,
    PortfolioComponent,
    AboutComponent,
    LocationComponent,
    SocialComponent,
    AboutFooterComponent,
    CopyrightComponent,
    PeopleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
