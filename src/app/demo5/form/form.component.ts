import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
    selector: 'app-form',
    imports: [ReactiveFormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.css'
})
export class FormComponent {
  // Création de la structure du formulaire
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  // Variable pour stocker les valeurs soumises pour la démo
  submittedValue: {
    name?: string | null;
    email?: string | null;
  } | null = null;

  // Variable pour afficher le message d'erreur si le formulaire est invalide
  showInvalidFormMessage = false;

  // Méthode appelée lors de la soumission du formulaire,
  // on valide le formulaire et affiche les valeurs soumises si le formulaire est valide,
  // sinon on affiche le message d'erreur
  onSubmit() {
    if (this.form.valid) {
      this.submittedValue = this.form.value;
      this.form.reset();
      this.showInvalidFormMessage = false;
    } else {
      this.submittedValue = null;
      this.showInvalidFormMessage = true;
    }
  }
}
