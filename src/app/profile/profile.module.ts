import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ProfileComponent } from './profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
// import { NgxSpinnerModule } from 'ngx-spinner';
// import { ContactComponent } from './Projects/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProjectsComponent } from './projects/projects.component';
import { ReferenceComponent } from './reference/reference.component';
import { TogglerComponent } from './toggler/toggler.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // SnotifyModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxSpinnerModule
  ],
  declarations: [
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    HobbiesComponent,
    ProjectsComponent,
    ReferenceComponent,
    TogglerComponent
  ],
  providers: [
   
  ]
})
export class ProfileModule { }