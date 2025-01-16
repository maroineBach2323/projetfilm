import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-avengers-detail',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './avengers-detail.component.html',
  styleUrl: './avengers-detail.component.css'
})
export class AvengersDetailComponent {

}
