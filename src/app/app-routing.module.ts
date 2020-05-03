import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { PortfolioComponent } from './portfolio/portfolio.component'
import { ContactComponent } from './contact/contact.component'
import { WorkComponent } from './work/work.component'
import { ResumeComponent } from './resume/resume.component'


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "contact", component: ContactComponent },
  { path: "work", component: WorkComponent },
  { path: "resume", component: ResumeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
