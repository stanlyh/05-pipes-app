import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Can Fly' | 'Can not fly' {
    return value ? 'Can Fly' : 'Can not fly';
  }
}
