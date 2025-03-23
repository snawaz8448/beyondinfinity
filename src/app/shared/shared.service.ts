import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  private sidebarDataSource = new BehaviorSubject<any>(null);
  sidebarData$ = this.sidebarDataSource.asObservable();

  updateSidebarData(data: any) {
    this.sidebarDataSource.next(data);
  }
}
