import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportFormularComponent } from './support-formular.component';

describe('SupportFormularComponent', () => {
  let component: SupportFormularComponent;
  let fixture: ComponentFixture<SupportFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SupportFormularComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
