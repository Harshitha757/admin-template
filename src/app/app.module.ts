import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { TodolistComponent } from './todolist/todolist.component';
import { CrudComponent } from './crud/crud.component';

import { ReversePipe } from './shared/pipes/reverse-pipe';

const appRoutes: Routes = [
  { path: 'todo', component: TodolistComponent },
  { path: 'crud', component: CrudComponent },
  {path: '', redirectTo: 'todo', pathMatch: 'full'}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    WorkspaceComponent,
    TodolistComponent,
    CrudComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
