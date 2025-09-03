import { Component, inject } from "@angular/core";
import { AsyncService } from "../async.service";

@Component({
    selector: "app-async",
    imports: [],
    templateUrl: "./async.component.html",
    styleUrl: "./async.component.css"
})
export class AsyncComponent {
  salutation = "...";

  asyncService: AsyncService = inject(AsyncService);

  async onClick() {
    const n = await this.asyncService.getName();
    this.salutation = `Salut ${n}`;
  }
}
