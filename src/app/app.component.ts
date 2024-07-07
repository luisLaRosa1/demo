import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass } from '@angular/common';
import { TemplateSelectorComponent } from './custom-grid/template-selector/template-selector.component';
import { ImageBoxComponent } from './custom-grid/image-box/image-box.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TemplateSelectorComponent,
    ImageBoxComponent,
    NgClass,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
}
