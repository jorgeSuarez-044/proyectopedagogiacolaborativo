import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColaborativoComponent } from './colaborativo.component';

describe('ColaborativoComponent', () => {
  let component: ColaborativoComponent;
  let fixture: ComponentFixture<ColaborativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColaborativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColaborativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
