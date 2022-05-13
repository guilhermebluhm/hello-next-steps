import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class PipePipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'playstation' : return 'sports_esports';
      case 'xbox' : return 'videogame_asset'
    }
    return 'warning_amber';
  }

}
