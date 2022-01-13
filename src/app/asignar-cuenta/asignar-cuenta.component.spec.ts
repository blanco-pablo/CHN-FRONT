import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarCuentaComponent } from './asignar-cuenta.component';

describe('AsignarCuentaComponent', () => {
  let component: AsignarCuentaComponent;
  let fixture: ComponentFixture<AsignarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
