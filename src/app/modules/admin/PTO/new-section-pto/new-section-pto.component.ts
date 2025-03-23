import { CommonModule, DatePipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-new-section-pto',
  standalone: true,
  imports: [CommonModule, MatFormFieldModule, MatTableModule, MatProgressSpinnerModule, MatSortModule, DatePipe],
  templateUrl: './new-section-pto.component.html',
  styleUrl: './new-section-pto.component.scss'
})
export class NewSectionPtoComponent {










  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  @ViewChild(MatSort) sort!: MatSort | undefined;
  
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
  



}
