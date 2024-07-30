import { Component, signal } from '@angular/core';
import { AsyncService } from '../async.service';

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [],
  templateUrl: './async.component.html',
  styleUrl: './async.component.css',
})
export class AsyncComponent {
  salutation = signal('...');

  constructor(private asyncService: AsyncService) {}

  async onClick() {
    const n = await this.asyncService.getName();
    this.salutation.set(`Salut ${n}`);
  }
}
