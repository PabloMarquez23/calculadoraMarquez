import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperacionesComponentComponent } from './operaciones-component.component';

describe('OperacionesComponentComponent', () => {
  let component: OperacionesComponentComponent;
  let fixture: ComponentFixture<OperacionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperacionesComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OperacionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
