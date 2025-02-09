import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgressComponent } from './view-progress.component';

describe('ViewProgressComponent', () => {
  let component: ViewProgressComponent;
  let fixture: ComponentFixture<ViewProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
