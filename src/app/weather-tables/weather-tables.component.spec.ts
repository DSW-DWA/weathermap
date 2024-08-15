import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTablesComponent } from './weather-tables.component';

describe('WeatherTablesComponent', () => {
  let component: WeatherTablesComponent;
  let fixture: ComponentFixture<WeatherTablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeatherTablesComponent]
    });
    fixture = TestBed.createComponent(WeatherTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
