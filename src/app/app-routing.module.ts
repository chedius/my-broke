import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContentComponent } from "./content/content.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [ContentComponent, AboutComponent,BlogComponent];
