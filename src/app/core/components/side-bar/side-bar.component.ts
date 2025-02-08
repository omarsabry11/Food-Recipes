import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MealsComponent } from "../../../features/pages/meals/meals.component";

@Component({
  selector: 'app-side-bar',
  imports: [RouterLink, RouterLinkActive, MealsComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

}
