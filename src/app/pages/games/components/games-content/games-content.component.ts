import { HttpRequestService } from './../../../../shared/services/http-request.service';
import { Component, OnInit } from '@angular/core';
import { Igames } from 'src/app/models/igames';

@Component({
  selector: 'app-games-content',
  templateUrl: './games-content.component.html',
  styleUrls: ['./games-content.component.scss']
})
export class GamesContentComponent implements OnInit {
  private URL:string="https://www.balldontlie.io/api/v1/games/?per_page=100"
  public games:Igames[]=[];
  public page: number | undefined;

  constructor(private httpRequestService:HttpRequestService) { }

  ngOnInit(): void {
    this.RecoverGames();
  }
  public RecoverGames(){
    this.httpRequestService.getData(this.URL).subscribe((data:any)=>{
      this.games=data.data;
    })
  }
}
