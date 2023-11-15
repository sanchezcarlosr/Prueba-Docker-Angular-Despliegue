import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTicketComponent } from './tabla-ticket.component';

describe('TablaTicketComponent', () => {
  let component: TablaTicketComponent;
  let fixture: ComponentFixture<TablaTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaTicketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
