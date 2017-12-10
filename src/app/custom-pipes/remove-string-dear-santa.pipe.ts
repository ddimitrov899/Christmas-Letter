import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'removeStringDearSanta'
})

export class RemoveStringDearSantaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      return value.toLowerCase().replace('dear santa, ', '');
    }
  }

}
