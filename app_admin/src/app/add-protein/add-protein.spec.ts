import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProtein } from './add-protein';

describe('AddProtein', () => {
  let component: AddProtein;
  let fixture: ComponentFixture<AddProtein>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProtein]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProtein);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
