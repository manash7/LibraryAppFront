import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudenviewComponent } from './studenview.component';

describe('StudenviewComponent', () => {
  let component: StudenviewComponent;
  let fixture: ComponentFixture<StudenviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudenviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudenviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
