import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTabsComponent } from './categories-tabs.component';

describe('CategoriesTabsComponent', () => {
  let component: CategoriesTabsComponent;
  let fixture: ComponentFixture<CategoriesTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
