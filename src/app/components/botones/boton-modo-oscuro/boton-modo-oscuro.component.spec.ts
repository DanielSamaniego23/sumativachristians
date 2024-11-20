import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModoOscuroComponent } from './boton-modo-oscuro.component';

describe('BotonModoOscuroComponent', () => {
  let component: BotonModoOscuroComponent;
  let fixture: ComponentFixture<BotonModoOscuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotonModoOscuroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonModoOscuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
