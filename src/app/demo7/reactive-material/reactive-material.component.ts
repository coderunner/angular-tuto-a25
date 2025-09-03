import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-material',
  imports: [
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './reactive-material.component.html',
  styleUrl: './reactive-material.component.css',
})
export class ReactiveMaterialComponent {
  data = [
    {
      title: 'Carotte',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',

      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Carrots_on_Display.jpg/240px-Carrots_on_Display.jpg',
    },
    {
      title: 'Radis',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Radis_ronds.JPG',
    },
    {
      title: 'Navet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Turnip_2622027.jpg',
    },
    {
      title: 'Concombre',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Komkommer_plant.jpg',
    },
    {
      title: 'Tomate',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/TomateCherryTross.jpg',
    },
    {
      title: 'Céleri',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/C%C3%A9leri.jpg',
    },
    {
      title: 'Courgette',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.',
      img: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Courgette_Cucurbita_pepo_2.jpg',
    },
  ];

  filterControl: FormControl;
  filteredProducts = signal(this.data);

  constructor(private fb: FormBuilder) {
    this.filterControl = this.fb.control('');
    this.filterControl.valueChanges.subscribe((value) => {
      this.filteredProducts.set(
        this.data.filter((product) => {
          if (value) {
            return product.title.toLowerCase().includes(value.toLowerCase());
          } else {
            return true;
          }
        }),
      );
    });
  }
}
