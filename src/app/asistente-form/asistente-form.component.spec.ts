import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsistenteFormComponent } from './asistente-form.component';

describe('AsistenteFormComponent', () => {
  let component: AsistenteFormComponent;
  let fixture: ComponentFixture<AsistenteFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsistenteFormComponent]
    });
    fixture = TestBed.createComponent(AsistenteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
