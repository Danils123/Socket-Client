import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somepipe'
})
export class SomepipePipe implements PipeTransform {
  transform(objects: any[]): any[] {
    if (objects) {
      return objects.filter(object => {
        return object.data.type === 1;
      });
    }
  }
}
