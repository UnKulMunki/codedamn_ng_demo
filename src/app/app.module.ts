// angular feature/functionality includes
import { BrowserModule } from "@angular/platform-browser";
// import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModules } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Reusable component includes
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from './sidenav/sidenav.component';

// page content
import { AdminComponent } from './admin/admin.component';
import { CodeDamnTutorialComponent } from "./codedamn-tutorial/codedamn-tutorial.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

// page content includes
import { HelloWorldTemplateComponent } from "./hello-world-template.component";
import { HelloWorldNgIfComponent } from "./hello-world-ngif/hello-world-ngif.component";
import { HelloWorldDependencyInjectionComponent } from "./hello-world-di/hello-world-di.component";
import { HelloWorldInterpolationComponent } from "./hello-world-interpolation/hello-world-interpolation.component";
import { HelloWorldBindingsComponent } from "./hello-world-bindings/hello-world-bindings.component";
import { LangListComponent } from "./lang-list/langlist.component";

// directive includes
import { RedColorDirective } from "./red-color.directive";

// define routes for Routing module
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: "codedamn-tutorial",
    component: CodeDamnTutorialComponent
  },
  {
    path: "dashboard",  // localhost/dashboard
    component: DashboardComponent
  },
  {
    path: 'hello',
    component: HelloWorldComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },

];

@NgModule({
  declarations: [
    // reusable content
    AppComponent,
    ToolbarComponent,
    SidenavComponent,

    // page content
    AdminComponent,
    CodeDamnTutorialComponent,
    DashboardComponent,
    HelloWorldComponent,
    HomeComponent,
    LoginComponent,
    
    // page content includes
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    LangListComponent,

    // directive includes
    RedColorDirective,
  ],

  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, HttpClientModule, MaterialModules, RouterModule.forRoot(appRoutes)], // CommonModule

  exports: [SidenavComponent, ToolbarComponent], // CommonModule

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}
