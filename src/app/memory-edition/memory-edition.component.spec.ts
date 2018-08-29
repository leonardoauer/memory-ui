import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryEditionComponent } from './memory-edition.component';

describe('MemoryEditionComponent', () => {
  let component: MemoryEditionComponent;
  let fixture: ComponentFixture<MemoryEditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemoryEditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoryEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
