import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalnoticiaComponent } from './modalnoticia.component';

describe('ModalnoticiaComponent', () => {
  let component: ModalnoticiaComponent;
  let fixture: ComponentFixture<ModalnoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalnoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalnoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
