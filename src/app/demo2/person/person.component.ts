import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../person.model';

@Component({
    selector: 'app-person',
    imports: [],
    templateUrl: './person.component.html',
    styleUrl: './person.component.css'
})
export class PersonComponent {
  // Input() permet au composant de prendre des paramètres lors de la création
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  @Input({ required: true })
  person: Person | null = null;

  // Output() permet au composant d'envoyer des événements au parent
  // Le type de l'output est un EventEmitter
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  @Output()
  delete = new EventEmitter<number>();

  // Sur un événement delete, on émet l'id de l'élément et laisse le receveur de l'événement gérer la logique.
  onDelete() {
    if (this.person) {
      this.delete.emit(this.person.id);
    }
  }
}
