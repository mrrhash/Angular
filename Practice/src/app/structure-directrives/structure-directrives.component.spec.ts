import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureDirectrivesComponent } from './structure-directrives.component';

describe('StructureDirectrivesComponent', () => {
  let component: StructureDirectrivesComponent;
  let fixture: ComponentFixture<StructureDirectrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureDirectrivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureDirectrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
