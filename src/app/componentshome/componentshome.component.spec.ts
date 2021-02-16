import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentshomeComponent } from './componentshome.component';

describe('ComponentshomeComponent', () => {
  let component: ComponentshomeComponent;
  let fixture: ComponentFixture<ComponentshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
