import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelComponent } from "./panel/panel.component";
import { TableroComponent } from './tablero/tablero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PanelComponent, TableroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'giravoltorbs';
}
