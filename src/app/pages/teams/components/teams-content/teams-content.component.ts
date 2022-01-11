import { Iteams } from './../../../../models/iteams';
import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-teams-content',
  templateUrl: './teams-content.component.html',
  styleUrls: ['./teams-content.component.scss']
})
export class TeamsContentComponent implements OnInit {
  private URL:string="https://www.balldontlie.io/api/v1/teams";
  public teams:Iteams[] = [];
  public page:number= 0;
  public search: string = "";

  constructor(private httpRequestService:HttpRequestService) { }

  ngOnInit(): void {
    this.RecoverTeams();
  }
  public RecoverTeams(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
      this.teams=data.data;
    })
  }
  nextPage(){
    this.page += 6;
  }
  prevPage(){
    if(this.page>0)
    this.page -= 6;
  }
  onSearchTeam(search:string){
    this.search = search;

  }
}
