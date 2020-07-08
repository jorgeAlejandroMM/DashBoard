import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercesTableComponent } from './commerces-table.component';

describe('CommercesTableComponent', () => {
  let component: CommercesTableComponent;
  let fixture: ComponentFixture<CommercesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
