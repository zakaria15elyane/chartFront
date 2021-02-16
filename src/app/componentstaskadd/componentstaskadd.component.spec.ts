import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentstaskaddComponent } from './componentstaskadd.component';

describe('ComponentstaskaddComponent', () => {
  let component: ComponentstaskaddComponent;
  let fixture: ComponentFixture<ComponentstaskaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentstaskaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentstaskaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
