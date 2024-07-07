import { Component } from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {AutoCompleteModule} from "primeng/autocomplete";
import {FormsModule} from "@angular/forms";

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-prime-ng',
  standalone: true,
  imports: [
    AccordionModule,
    AutoCompleteModule,
    FormsModule
  ],
  templateUrl: './prime-ng.component.html',
  styleUrl: './prime-ng.component.scss'
})
export class PrimeNgComponent {
  items: any[] | undefined;

  selectedItem: any;

  suggestions!: any[];

  search(event: AutoCompleteCompleteEvent) {
    this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

}
