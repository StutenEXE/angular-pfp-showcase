import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfpListComponent } from './pfp-list.component';

describe('PfpListComponent', () => {
  let component: PfpListComponent;
  let fixture: ComponentFixture<PfpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfpListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
