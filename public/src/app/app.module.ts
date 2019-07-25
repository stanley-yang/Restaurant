import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { HttpService} from './http.service';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
// import { ReviewComponent } from './review/review.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
    // ReviewComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
