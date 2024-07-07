import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularGridLayoutComponent } from './angular-grid-layout.component';

describe('AngularGridLayouComponent', () => {
  let component: AngularGridLayoutComponent;
  let fixture: ComponentFixture<AngularGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularGridLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
