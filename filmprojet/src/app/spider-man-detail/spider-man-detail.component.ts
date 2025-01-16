import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-spider-man-detail',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './spider-man-detail.component.html',
  styleUrl: './spider-man-detail.component.css'
})
export class SpiderManDetailComponent {

}
