import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantComponent } from './composant.component';

describe('ComposantComponent', () => {
  let component: ComposantComponent;
  let fixture: ComponentFixture<ComposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComposantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
