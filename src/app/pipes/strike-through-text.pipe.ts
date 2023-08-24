import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strikeThroughText'
})
export class StrikeThroughTextPipe implements PipeTransform {

  transform(text: string, isCrossedOut: boolean = true): unknown {
    return isCrossedOut ? '<s>'.concat(text, '</s>') : text ;
  }

}
