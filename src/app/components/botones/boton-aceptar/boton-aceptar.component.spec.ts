import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAceptarComponent } from './boton-aceptar.component';

describe('BotonAceptarComponent', () => {
  let component: BotonAceptarComponent;
  let fixture: ComponentFixture<BotonAceptarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonAceptarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
