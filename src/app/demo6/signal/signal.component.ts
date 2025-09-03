import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  OnDestroy,
  signal,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Person } from '../../demo2/person.model';
import { PersonService } from '../../demo2/person.service';
import { Subscription } from 'rxjs';
import { SignalChildComponent } from '../signal-child/signal-child.component';

@Component({
    selector: 'app-signal',
    imports: [ReactiveFormsModule, SignalChildComponent],
    templateUrl: './signal.component.html',
    styleUrl: './signal.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent implements OnDestroy {
  form: FormGroup;

  // Définitions de l'état du composant à l'aide de signaux
  persons = signal<Person[]>([]);
  newPersonCount = signal<number>(0);
  deletedPersonCount = signal<number>(0);

  // Signal en lecture seul, qui dépend de deux autres signaux et qui se recalcule automatiquement.
  diffPersonCount = computed(
    () => this.newPersonCount() - this.deletedPersonCount(),
  );

  private personsSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private personService: PersonService,
  ) {
    this.form = this.formBuilder.group({
      name: '',
    });
    this.personsSubscription = this.personService
      .getPersons()
      .subscribe((persons) => this.persons.set(persons));

    // Effet qui se déclenche à chaque changement de l'état diffPersonCount
    effect(() => {
      console.log(`Delta: ${this.diffPersonCount()}`);
    });
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
        // Mise à jour du compte de nouvelle personnes créees
        this.newPersonCount.update((count) => count + 1);
      }
      this.form.reset();
    }
  }

  onDelete(id: number) {
    this.personService.delete(id);
    // Mise à jour du compte des personnes supprimées
    this.deletedPersonCount.update((count) => count + 1);
  }
}
