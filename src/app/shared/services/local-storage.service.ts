import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public set(key: string, value: any) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
  }

  public get(key: string): any {
    const parsedData = JSON.parse(localStorage.getItem(key));
    return parsedData;
  }

  public getByProperty(key: string, property): any {
    const parsedData = JSON.parse(localStorage.getItem(key));
    return parsedData[property];
  }
  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
