import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProtein } from './edit-protein';

describe('EditProtein', () => {
  let component: EditProtein;
  let fixture: ComponentFixture<EditProtein>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditProtein]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProtein);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
