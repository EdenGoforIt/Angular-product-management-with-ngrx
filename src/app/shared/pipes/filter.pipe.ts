import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

/**
 * Filter a KeyValue json list
 * To work with arrays it needs to be replaced after a 'KeyValue' Pipe
 */
export class FilterPipe implements PipeTransform {
  transform(items: any[], search: { [key: string]: any }): any[] {
    return items ? items.filter(item => {
      return Object.keys(search).find(key => {
        return !!search[key] ? !!item[key] && item[key].toLowerCase().indexOf(search[key].toLowerCase() !== -1: true);
      });
    }) : [];
  }
}
