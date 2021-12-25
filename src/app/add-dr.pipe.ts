import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addDr'
})
export class AddDrPipe implements PipeTransform {

  transform(value: string): string {
    return "Dr. "+value;
  }

}
