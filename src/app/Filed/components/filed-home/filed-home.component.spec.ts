import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiledHomeComponent } from './filed-home.component';

describe('FiledHomeComponent', () => {
  let component: FiledHomeComponent;
  let fixture: ComponentFixture<FiledHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiledHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiledHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
