import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MaterialModules } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from "./app.component";
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { HelloWorldTemplateComponent } from "./hello-world-template.component";
import { HelloWorldNgIfComponent } from "./hello-world-ngif/hello-world-ngif.component";
import { HelloWorldDependencyInjectionComponent } from "./hello-world-di/hello-world-di.component";
import { HelloWorldInterpolationComponent } from "./hello-world-interpolation/hello-world-interpolation.component";
import { HelloWorldBindingsComponent } from "./hello-world-bindings/hello-world-bindings.component";
import { LangListComponent } from "./lang-list/langlist.component";
import { CodeDamnTutorialComponent } from "./codedamn-tutorial/codedamn-tutorial.component";
import { RedColorDirective } from "./red-color.directive";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidenavComponent } from './sidenav/sidenav.component';

const appRoutes: Routes = [
  {
    path: "codedamn-tutorial",
    component: CodeDamnTutorialComponent
  },
  {
    path: "dashboard",  // localhost/dashboard
    component: DashboardComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldTemplateComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldInterpolationComponent,
    HelloWorldBindingsComponent,
    LangListComponent,
    CodeDamnTutorialComponent,
    RedColorDirective,
    DashboardComponent,
    HomeComponent,
    ToolbarComponent,
    SidenavComponent
  ],

  imports: [RouterModule.forRoot(appRoutes), BrowserModule, FormsModule, BrowserAnimationsModule, MaterialModules],

  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule {}

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

