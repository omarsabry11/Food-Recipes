import { Component, Input } from '@angular/core';
import { Meal } from '../../../../features/interfaces/meal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-meal-item',
  imports: [RouterLink],
  templateUrl: './meal-item.component.html',
  styleUrl: './meal-item.component.scss'
})
export class MealItemComponent {

  @Input() meal!:Meal;


}
