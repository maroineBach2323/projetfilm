import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-iron-man-detail',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './iron-man-detail.component.html',
  styleUrl: './iron-man-detail.component.css'
})
export class IronManDetailComponent {

}
