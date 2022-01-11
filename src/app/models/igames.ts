export interface Igames{
  id:number;
  season:string;
  home_team_score:number;
  visitor_team_score:number;
  home_team:{
    full_name:string;
    city:string;
    conference:string;
    division:string;
    name:string;
  }
  visitor_team:{
    full_name:string;
    city:string;
    conference:string;
    division:string;
    name:string;

  }

}
export interface GamesResponseApi{
  info:{
    total_pages:number;
    current_page:number;
    next_page:number;
    total_count:number;
  };
  results:Igames[];
}
