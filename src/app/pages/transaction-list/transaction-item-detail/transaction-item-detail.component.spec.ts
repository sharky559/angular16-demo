import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListDetailComponent } from './transaction-item-detail.component';

describe('transactionListDetailComponent', () => {
  let component: TransactionListDetailComponent;
  let fixture: ComponentFixture<TransactionListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
