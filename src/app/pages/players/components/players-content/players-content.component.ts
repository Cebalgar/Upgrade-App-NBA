import { TeamsContentComponent } from './../../../teams/components/teams-content/teams-content.component';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { Iplayers } from 'src/app/models/iplayers';



@Component({
  selector: 'app-players-content',
  templateUrl: './players-content.component.html',
  styleUrls: ['./players-content.component.scss']
})
export class PlayersContentComponent implements OnInit {

  private URL:string='https://www.balldontlie.io/api/v1/players?per_page=100';

  public playersList:Iplayers []=[];
  public page: number = 0;
  public search: string = "";



  constructor(private httpRequestService:HttpRequestService ) { }



  ngOnInit(): void {

    this.RecoverPlayersData();
  }

  public RecoverPlayersData(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
      this.playersList=data.data;


    })
  }
  nextPage(){
    this.page += 9;
  }
  prevPage(){
    if(this.page>0)
    this.page -= 9;
  }

  onSearchPlayer(search:string){
    this.search = search;

  }

}
