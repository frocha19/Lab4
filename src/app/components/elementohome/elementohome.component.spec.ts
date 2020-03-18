import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementohomeComponent } from './elementohome.component';

describe('ElementohomeComponent', () => {
  let component: ElementohomeComponent;
  let fixture: ComponentFixture<ElementohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
