import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Category } from '../../interfaces/category';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categories-tabs',
  imports: [],
  templateUrl: './categories-tabs.component.html',
  styleUrl: './categories-tabs.component.scss',
})
export class CategoriesTabsComponent implements OnInit {
  @Input() categories!: Category[];

  @Input() selectedCategory!: string;

  @Output() category = new EventEmitter<string>();

  _activatedRoute = inject(ActivatedRoute);
  _router = inject(Router);

  path: string = '';
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.category.emit(params.get('category') || '');
    });
  }

  setSelectedCategory(selectedCategory: string) {
    this.category.emit(selectedCategory);
  }
}
