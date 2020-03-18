import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementodetalleComponent } from './elementodetalle.component';

describe('ElementodetalleComponent', () => {
  let component: ElementodetalleComponent;
  let fixture: ComponentFixture<ElementodetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementodetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementodetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
