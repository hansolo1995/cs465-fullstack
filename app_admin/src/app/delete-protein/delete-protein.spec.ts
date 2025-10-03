import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProtein } from './delete-protein';

describe('DeleteProtein', () => {
  let component: DeleteProtein;
  let fixture: ComponentFixture<DeleteProtein>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteProtein]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProtein);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
