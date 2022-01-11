import { Pipe, PipeTransform } from '@angular/core';
import { Iteams } from './../../models/iteams';

@Pipe({
  name: 'buscar'
})


export class BuscarPipe implements PipeTransform {
  transform(teams: Iteams[], page:number=0, search: string = ""): Iteams[]{

    if(search.length === 0)
      return teams.slice(page,page + 6);


    const filterTeams = teams.filter(team=>team.full_name.includes(search));

    return filterTeams.slice(page, page + 6)

       }
}
