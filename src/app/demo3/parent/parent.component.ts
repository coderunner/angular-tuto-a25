import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css',
})
export class ParentComponent {
  @ViewChild(ChildComponent)
  child: ChildComponent | undefined;

  onClick() {
    this.child?.setText(Math.random().toString());
  }
}
