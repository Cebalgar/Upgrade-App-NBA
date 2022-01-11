
import { BuscarPipe } from './../../shared/pipes/buscar.pipe';
import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsContentComponent } from './components/teams-content/teams-content.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamsContentComponent,
    BuscarPipe

  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule

  ],
  providers:[HttpRequestService]
})
export class TeamsModule { }
