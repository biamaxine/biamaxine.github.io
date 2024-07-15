import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoformatComponent } from './logoformat.component';

describe('LogoformatComponent', () => {
  let component: LogoformatComponent;
  let fixture: ComponentFixture<LogoformatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoformatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoformatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
