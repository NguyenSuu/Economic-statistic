import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTypeDataComponent } from './dialog-type-data.component';

describe('DialogTypeDataComponent', () => {
  let component: DialogTypeDataComponent;
  let fixture: ComponentFixture<DialogTypeDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogTypeDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogTypeDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
