import { Routes } from '@angular/router';
import { MealsComponent } from './features/pages/meals/meals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'meals', pathMatch: 'full' },
  {
    path: 'meals',
    component: MealsComponent,
    title: 'Meals',
  },
  {
    path: 'meals/meal-details/:id',
    loadComponent: () =>
      import('./features/pages/meal-details/meal-details.component').then(
        (c) => c.MealDetailsComponent
      ),
    title: 'Meal Details',
  

  },
  {
    path: 'meals/:category',
    component: MealsComponent,
    title: 'Meals',

  },

  {
    path: 'ingredients',
    loadComponent: () =>
      import('./features/pages/ingredients/ingredients.component').then(
        (c) => c.IngredientsComponent
      ),
    title: 'Ingredients',
  },
  {
    path: 'area',
    loadComponent: () =>
      import('./features/pages/area/area.component').then(
        (c) => c.AreaComponent
      ),
    title: 'Area',
  },
];
