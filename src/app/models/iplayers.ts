export interface Iplayers{
  id:number;
  first_name:string;
  last_name:string;
  position:string;
  team:{
    id:number;
    name:string;
    full_name:string;
    abbreviation:string;
    city:string;
    conference:string;
    division:string;

  }


  }




export interface PlayersResponseApi{
  info:{
    total_pages:number;
    current_page:number;
    next_page:number;
    per_page:number;
    total_count:number;
  };
  results:Iplayers[];
}
