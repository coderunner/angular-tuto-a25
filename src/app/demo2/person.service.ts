import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Person } from './person.model';

/**
 * Les services sont injectables dans les composants via l'injection de dépendances de Angular
 */
@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private static DEFAULT: Person[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Lucie' },
  ];

  private lastId = 2;

  // Un BehaviorSubject est un observable qui emet une valeur au départ.
  private persons$ = new BehaviorSubject(PersonService.DEFAULT);

  // Méthode pour obtenir un Observable sur la liste des personnes.
  getPersons(): Observable<Person[]> {
    return this.persons$;
  }

  // Méthode pour effacer une personne par son id.
  delete(id: number) {
    this.persons$.next(this.persons$.value.filter((p) => p.id !== id));
  }

  // Méthode pour ajouter une personne.
  add(name: string) {
    const newList = [
      ...this.persons$.value,
      { id: this.incrementId(), name: name },
    ];
    this.persons$.next(newList);
  }

  private incrementId(): number {
    const nextId = this.lastId + 1;
    this.lastId = nextId;
    return nextId;
  }
}
