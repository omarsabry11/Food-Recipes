import { MealIngredients } from './../../interfaces/meal-details';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealDetailsService } from '../../services/meals/meal-details/meal-details.service';
import { MealDetails } from '../../interfaces/meal-details';

@Component({
  selector: 'app-meal-details',
  imports: [],
  templateUrl: './meal-details.component.html',
  styleUrl: './meal-details.component.scss',
})
export class MealDetailsComponent implements OnInit {
  _activatedRoute = inject(ActivatedRoute);
  _mealDetailsService = inject(MealDetailsService);

  id: string | null = '';

  meal!: MealDetails;
  mealIngredients!: MealIngredients[];
  mealMeasures!: MealIngredients[];

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(this.id);
    });

    if (this.id) {
      this.getMealDetails(this.id);
    }
  }

  getMealDetails(id: string) {
    this._mealDetailsService.getMealDetails(id).subscribe({
      next: (res) => {
        // console.log('Detailsss', res.meals[0]);
        this.meal = res.meals[0];

        this.mealIngredients = Object.entries(this.meal)
          .filter(
            ([key, value]) => key.startsWith('strIngredient') && value.trim() !== ''
          )
          .map(([_, value]) => value);

        this.mealMeasures = Object.entries(this.meal)
          .filter(
            ([key, value]) =>
              key.startsWith('strMeasure') && value.trim() !== ''
          )
          .map(([_, value]) => value);
        console.log(this.mealIngredients);
        console.log(this.mealMeasures);
      },

      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
