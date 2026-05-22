import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanPhamListComponent } from './san-pham-list.component';

describe('SanPhamListComponent', () => {
  let component: SanPhamListComponent;
  let fixture: ComponentFixture<SanPhamListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SanPhamListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SanPhamListComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
