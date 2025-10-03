import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinCard } from './protein-card';

describe('ProteinCard', () => {
  let component: ProteinCard;
  let fixture: ComponentFixture<ProteinCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProteinCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProteinCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
