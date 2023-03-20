import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsDropdownComponent } from './regions-dropdown.component';

describe('RegionsDropdownComponent', () => {
  let component: RegionsDropdownComponent;
  let fixture: ComponentFixture<RegionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionsDropdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
