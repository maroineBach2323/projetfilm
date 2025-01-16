import { Component, ChangeDetectionStrategy } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-hulk-detail',
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hulk-detail.component.html',
  styleUrl: './hulk-detail.component.css'
})
export class HulkDetailComponent {

}
