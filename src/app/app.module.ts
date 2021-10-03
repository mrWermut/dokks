import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuBarComponent} from './components/app-menu/menu-bar.component';
import {LoginComponent} from './components/login/login.component';
import {DataListComponent} from './components/data-list/data-list.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MainWindowComponent} from './components/main-window/main-window.component';
import {ApplicationDocumentFormComponent} from './components/application-document-form/application-document-form.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {DocPriorityDirective} from './directives/doc-priority.directive';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {UserService} from './services/user/user.service';
import {DocumentsGuard} from './guards/documents.guard';
import {DocumentDataProvider} from './services/document-data-provider/document-data-provider.service';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatDividerModule} from '@angular/material/divider';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'documents', component: MainWindowComponent, canActivate: [DocumentsGuard]},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    LoginComponent,
    DataListComponent,
    MainWindowComponent,
    ApplicationDocumentFormComponent,
    DocPriorityDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatButtonToggleModule,
    FontAwesomeModule,
    MatDividerModule,

    RouterModule.forRoot(
      appRoutes),


  ],
  providers: [UserService, DocumentsGuard, DocumentDataProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
