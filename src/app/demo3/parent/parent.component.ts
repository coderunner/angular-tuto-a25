import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
    selector: 'app-parent',
    imports: [ChildComponent],
    templateUrl: './parent.component.html',
    styleUrl: './parent.component.css'
})
export class ParentComponent {
  compteur = 0;

  @ViewChild(ChildComponent)
  child: ChildComponent | undefined;

  onClick() {
    this.child?.setText(`Texte du parent ${this.compteur++}`);
  }
}
