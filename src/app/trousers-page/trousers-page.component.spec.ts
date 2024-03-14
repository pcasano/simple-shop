import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrousersPageComponent } from './trousers-page.component';

describe('TrousersPageComponent', () => {
  let component: TrousersPageComponent;
  let fixture: ComponentFixture<TrousersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrousersPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrousersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
