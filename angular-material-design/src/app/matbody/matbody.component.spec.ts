import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatbodyComponent } from './matbody.component';

describe('MatbodyComponent', () => {
  let component: MatbodyComponent;
  let fixture: ComponentFixture<MatbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
