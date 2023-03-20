import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionsDropdownComponent } from './regions-dropdown.component';

describe('RegionsDropdownComponent', () => {
  let component: RegionsDropdownComponent;
  let fixture: ComponentFixture<RegionsDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegionsDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RegionsDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should emit value on _onRegionChange', () => {
    let code = { value: { code: 'IND' } };
    let emitSpy = spyOn(component.onRegionChange, 'emit');
    component._onRegionChange(code);

    expect(emitSpy).toHaveBeenCalledWith(code.value.code);
  });
});
