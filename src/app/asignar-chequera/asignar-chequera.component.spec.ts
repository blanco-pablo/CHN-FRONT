import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarChequeraComponent } from './asignar-chequera.component';

describe('AsignarChequeraComponent', () => {
  let component: AsignarChequeraComponent;
  let fixture: ComponentFixture<AsignarChequeraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarChequeraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarChequeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
