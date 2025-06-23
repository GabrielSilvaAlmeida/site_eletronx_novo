import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HemodinamicaComponent } from './hemodinamica.component';

describe('HemodinamicaComponent', () => {
  let component: HemodinamicaComponent;
  let fixture: ComponentFixture<HemodinamicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HemodinamicaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HemodinamicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
