import { HttpRequestService } from './../../shared/services/http-request.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesContentComponent } from './components/games-content/games-content.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    GamesContentComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [HttpRequestService]


})
export class GamesModule { }
