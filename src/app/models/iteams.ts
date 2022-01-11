export interface Iteams{
  id:number;
  name:string;
  full_name:string;
  abbreviation:string;
  city:string;
  conference:string;
  division:string;
  }



export interface GamesResponseApi{
  info:{
    total_pages:number;
    current_page:number;
    next_page:number;
    total_count:number;
  };
  results:Iteams[];
}
