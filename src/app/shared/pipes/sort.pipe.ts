import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(items: any[], field: string): any[] {
    if (!field) {
      return items;
    }

    return items.sort((a, b) => {
      //if boolean return true first
      if (typeof a[field] === 'boolean') {
        return a[field] === b[field] ? 0 : a[field] ? -1 : 1;
      } else {
        if (!!a[field] && !!b[field]) {
          let vA: any = a[field];
          let vB: any = b[field];
          if (typeof vA === 'string') {
            vA = vA.toLowerCase().trim();
          }

          if (typeof vB === 'string') {
            vB = vB.toLowerCase().trim();
          }

          if (vA !== vB) {
            return vA > vB ? 1 : -1;
          }
        }
        return 0;
      }
    });
  }
}
