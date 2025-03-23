import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatSort, MatSortModule, SortDirection} from '@angular/material/sort';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {DatePipe} from '@angular/common';
import { NewSectionPtoComponent } from "../new-section-pto/new-section-pto.component";


@Component({
  selector: 'app-pto',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatSortModule, DatePipe, NewSectionPtoComponent],
  templateUrl: './pto.component.html',
  styleUrl: './pto.component.scss'
})
export class PtoComponent {
  @ViewChild('tabsWrapper', { static: true }) tabsWrapper!: ElementRef;
  activeTab:string='New';

  tabs = [
    { title: 'New', icon: 'fas fa-thumbtack', count: 850 },
    { title: 'In Revision', icon: 'fas fa-sync-alt', count: 139 },
    { title: 'On Hold', icon: 'fas fa-pause-circle', count: 12 },
    { title: 'In Stamping', icon: 'fas fa-hammer', count: 154 },
    { title: 'Delivered', icon: 'fas fa-file-invoice', count: 358 },
    { title: 'PIL', icon: 'fas fa-file-alt' , count: 358 },
    // Add more tabs as needed
  ];

  scrollLeft() {
    this.tabsWrapper.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  scrollRight() {
    this.tabsWrapper.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }

  onTabChange(tab:string){
    this.activeTab=tab;
  }


  displayedColumns: string[] = ['created', 'state', 'number', 'title'];

  data: any[] = [
    { created: '2024-03-01', state: 'New York', number: '001', title: 'Solar Permit A' },
    { created: '2024-03-02', state: 'California', number: '002', title: 'Solar Permit B' },
    { created: '2024-03-03', state: 'Texas', number: '003', title: 'Solar Permit C' },
    { created: '2024-03-04', state: 'Florida', number: '004', title: 'Solar Permit D' },
    { created: '2024-03-05', state: 'Nevada', number: '005', title: 'Solar Permit E' },
    { created: '2024-03-06', state: 'Arizona', number: '006', title: 'Solar Permit F' },
    { created: '2024-03-07', state: 'Illinois', number: '007', title: 'Solar Permit G' },
    { created: '2024-03-08', state: 'Georgia', number: '008', title: 'Solar Permit H' },
    { created: '2024-03-09', state: 'Ohio', number: '009', title: 'Solar Permit I' },
    { created: '2024-03-10', state: 'Colorado', number: '010', title: 'Solar Permit J' },
    { created: '2024-03-11', state: 'Oregon', number: '011', title: 'Solar Permit K' },
    { created: '2024-03-12', state: 'Michigan', number: '012', title: 'Solar Permit L' },
    { created: '2024-03-13', state: 'Pennsylvania', number: '013', title: 'Solar Permit M' },
    { created: '2024-03-14', state: 'Washington', number: '014', title: 'Solar Permit N' },
    { created: '2024-03-15', state: 'Massachusetts', number: '015', title: 'Solar Permit O' },
    { created: '2024-03-16', state: 'Virginia', number: '016', title: 'Solar Permit P' },
    { created: '2024-03-17', state: 'North Carolina', number: '017', title: 'Solar Permit Q' },
    { created: '2024-03-18', state: 'Tennessee', number: '018', title: 'Solar Permit R' },
    { created: '2024-03-19', state: 'Indiana', number: '019', title: 'Solar Permit S' },
    { created: '2024-03-20', state: 'Wisconsin', number: '020', title: 'Solar Permit T' },
  ];
  

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @ViewChild(MatSort) sort: MatSort | undefined;

  

}
