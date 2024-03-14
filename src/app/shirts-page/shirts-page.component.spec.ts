import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShirtsPageComponent } from './shirts-page.component';

describe('ShirtsPageComponent', () => {
  let component: ShirtsPageComponent;
  let fixture: ComponentFixture<ShirtsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShirtsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShirtsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
