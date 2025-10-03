import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinListing } from './protein-listing';

describe('ProteinListing', () => {
  let component: ProteinListing;
  let fixture: ComponentFixture<ProteinListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
