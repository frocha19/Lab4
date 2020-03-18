import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablanoticiaComponent } from './tablanoticia.component';

describe('TablanoticiaComponent', () => {
  let component: TablanoticiaComponent;
  let fixture: ComponentFixture<TablanoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablanoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablanoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
