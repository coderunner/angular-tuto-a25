import { Component, OnDestroy } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [PersonComponent, ReactiveFormsModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css',
})
export class PersonsComponent implements OnDestroy {
  // On crée la structure du formulaire.
  // On assigne le formulaire et ses champs dans le HTML
  form: FormGroup;

  persons: Person[] = [];

  private personsSubscription: Subscription;

  // Angular nous injecte les dépendances!
  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
  ) {
    this.form = this.formBuilder.group({
      name: '',
    });
    this.personsSubscription = this.personService
      .getPersons()
      .subscribe((persons) => (this.persons = persons));
  }

  ngOnDestroy(): void {
    if (this.personsSubscription) {
      this.personsSubscription.unsubscribe();
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      if (this.form.value.name) {
        this.personService.add(this.form.value.name);
      }
      this.form.reset();
    }
  }

  onDelete(id: number) {
    this.personService.delete(id);
  }
}
