import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ToastComponent } from './toast/toast.component';
import { ProgressComponent } from './home/progress/progress.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { AboutMeComponent } from './home/about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PortfolioComponent,
    WorkComponent,
    ContactComponent,
    ResumeComponent,
    ToastComponent,
    ProgressComponent,
    ExperienceComponent,
    AboutMeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
