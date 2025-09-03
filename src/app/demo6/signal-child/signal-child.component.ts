import { ChangeDetectionStrategy, input, output } from '@angular/core';
import { Component } from '@angular/core';
import { Person } from '../../demo2/person.model';

@Component({
    selector: 'app-signal-child',
    imports: [],
    templateUrl: './signal-child.component.html',
    styleUrl: './signal-child.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalChildComponent {
  // Alternative au @Input qui crée un signal
  person = input.required<Person>();

  // Alternative pour output
  delete = output<number>();

  // Sur un événement delete, on émet l'id de l'élément et laisse le receveur de l'événement gérer la logique.
  onDelete() {
    this.delete.emit(this.person().id);
  }
}
