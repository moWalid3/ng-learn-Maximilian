import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  // pure: false // you can use it to solve the problem in onReset() method ==> but be careful when you use it because it will be working after any changing happen in your app and that is bad to performance 
})
export class SortPipe implements PipeTransform {

  transform(value: number[] | string[]) {
    let sorted = [...value].sort((a, b) => {
      if (a > b) return 1;
      else return -1;
    });

    return sorted;
  }
}
