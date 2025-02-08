import { Category } from './../../interfaces/category';
import { Component, inject, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals/meals.service';
import { Router, RouterOutlet } from '@angular/router';
import { CategoriesTabsComponent } from '../../components/categories-tabs/categories-tabs.component';
import { MealItemComponent } from '../../../shared/components/meal-item/meal-item/meal-item.component';

@Component({
  selector: 'app-meals',
  imports: [RouterOutlet, CategoriesTabsComponent, MealItemComponent],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss',
})
export class MealsComponent implements OnInit {
  _mealsService = inject(MealsService);

  category = '';
  meals = [];
  categories: Category[] = [];
  _router = inject(Router);

  ngOnInit(): void {
    this.getCategories();
  }

  getMeals(category: string) {
    this._mealsService.getMeals(category).subscribe({
      next: (res) => {
        this.meals = res.meals;
   
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  getAllMeals() {
    this._mealsService.getAllMeals().subscribe({
      next: (res) => {
        console.log('All resssssss', res.meals);
        this.meals = res.meals;
      },
      error: (err) => {
        console.log(err);
        
      },
      complete: () => {},
    });
  }

  getCategories() {
    this._mealsService.getCategories().subscribe({
      next: (res) => {
        console.log(res.meals);
        this.categories = res.meals;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
  }

  onCategorySelected(selectedCategory: string) {
    this.category = selectedCategory;
    if (this.category) {
      this._router.navigate(['meals', this.category]);
      this.getMeals(this.category);
    } else {
      
      this._router.navigate(['meals', '']);
      this.getAllMeals();
    }
  }
}
