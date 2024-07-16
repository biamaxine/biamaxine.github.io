import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouletteTechComponent } from './roulette-tech.component';

describe('RouletteTechComponent', () => {
  let component: RouletteTechComponent;
  let fixture: ComponentFixture<RouletteTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouletteTechComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouletteTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
