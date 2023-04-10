import { Component, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  // styleUrls: ['./parent.component.css'],
  standalone: true,
  imports: [ChildComponent],
})
export class ParentComponent {
  currentItem = 'Television';
}
