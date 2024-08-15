import { Routes } from '@angular/router';
import { ComposantComponent } from './demo1/composant/composant.component';
import { PersonsComponent } from './demo2/persons/persons.component';
import { ParentComponent } from './demo3/parent/parent.component';
import { AsyncComponent } from './demo4/async/async.component';
import { FormComponent } from './demo5/form/form.component';
import { SignalComponent } from './demo6/signal/signal.component';

export const routes: Routes = [
  {
    path: 'demo1',
    component: ComposantComponent,
  },
  {
    path: 'demo2',
    component: PersonsComponent,
  },
  {
    path: 'demo3',
    component: ParentComponent,
  },
  {
    path: 'demo4',
    component: AsyncComponent,
  },
  {
    path: 'demo5',
    component: FormComponent,
  },
  {
    path: 'demo6',
    component: SignalComponent,
  },
  {
    path: '**',
    component: ComposantComponent,
  },
];
