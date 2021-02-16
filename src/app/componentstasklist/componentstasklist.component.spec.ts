import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentstasklistComponent } from './componentstasklist.component';

describe('ComponentstasklistComponent', () => {
  let component: ComponentstasklistComponent;
  let fixture: ComponentFixture<ComponentstasklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentstasklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentstasklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
