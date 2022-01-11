
import { Iplayers } from './../../models/iplayers';

import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter',

})

export class FilterPipe implements PipeTransform {


  transform(players: Iplayers[], page:number = 0, search: string = ""): Iplayers[]{

    if(search.length === 0)
      return players.slice(page,page + 9);


   const filterPlayers = players.filter(player=>player.first_name.includes(search));

   return filterPlayers.slice(page, page + 9);

      }
    }



