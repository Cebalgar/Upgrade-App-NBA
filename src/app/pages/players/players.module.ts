import { FilterPipe } from './../../shared/pipes/filter.pipe';


import { HttpClientModule } from '@angular/common/http';
import { HttpRequestService } from './../../shared/services/http-request.service';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersContentComponent } from './components/players-content/players-content.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';import { filter } from 'rxjs';
;


@NgModule({
  declarations: [
    PlayersContentComponent,
    FilterPipe


  ],
  imports: [
    CommonModule,
    PlayersRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,

  ],
  providers: [HttpRequestService]
})
export class PlayersModule { };

