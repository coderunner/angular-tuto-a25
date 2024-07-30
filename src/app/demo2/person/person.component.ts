import { Component, input, output } from '@angular/core';
import { Person } from '../person.model';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [],
  templateUrl: './person.component.html',
  styleUrl: './person.component.css',
})
export class PersonComponent {
  // Input() permet au composant de prendre des paramètres lors de la création
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  person = input.required<Person>();

  // Output() permet au composant d'envoyer des événements au parent
  // Le type de l'output est un EventEmitter
  // Le nom de l'attribut est le nom de la propriété à utiliser dans le HTML
  onDelete = output<number>();

  // Sur un événement delete, on émet l'id de l'élément et laisse le receveur de l'événement gérer la logique.
  delete() {
    this.onDelete.emit(this.person().id);
  }
}
