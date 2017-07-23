import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: string, stars: number): any {
    if (value.length > 5) {
      let s = '';
      for (let i = 0; i < stars; i++) {
        s = s + '*';
      }
      return value[0] + s + value[value.length - 1];
    }
    return value;
  }

}
