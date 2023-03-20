import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Region } from 'src/app/model/countries.model';

@Component({
  selector: 'app-regions-dropdown',
  templateUrl: './regions-dropdown.component.html',
  styleUrls: ['./regions-dropdown.component.scss'],
})
export class RegionsDropdownComponent implements OnInit {
  @Output() onRegionChange = new EventEmitter<string>();
  public selectedRegion: Region | undefined;

  // Need to move this static array
  public regions: Region[] = [
    { name: 'Africa', code: 'Africa' },
    { name: 'America', code: 'Americas' },
    { name: 'Asia', code: 'Asia' },
    { name: 'Europe', code: 'Europe' },
    { name: 'Oceania', code: 'Oceania' },
  ];

  constructor() {}

  ngOnInit(): void {}

  _onRegionChange($event: any) {
    this.onRegionChange.emit($event?.value?.code);
  }
}
