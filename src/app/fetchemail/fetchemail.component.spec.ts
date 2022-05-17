import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchemailComponent } from './fetchemail.component';

describe('FetchemailComponent', () => {
  let component: FetchemailComponent;
  let fixture: ComponentFixture<FetchemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchemailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
