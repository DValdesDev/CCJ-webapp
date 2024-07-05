import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesCuotaComponent } from './mensajes-cuota.component';

describe('MensajesCuotaComponent', () => {
  let component: MensajesCuotaComponent;
  let fixture: ComponentFixture<MensajesCuotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MensajesCuotaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajesCuotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
