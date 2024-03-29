import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { AuthGuard } from './guards/auth.guard';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { MemberDetailsComponent } from './members/member-details/member-details.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorsComponent } from './errors/errors.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'members', component: MembersListComponent},
      {path: 'members/:username', component: MemberDetailsComponent},
      {path: 'lists', component: ListsComponent},
      {path: 'messages', component: MessagesComponent},
    ]
  },
  {path: 'errors', component: ErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
