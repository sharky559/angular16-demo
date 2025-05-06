import { inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FilterParams,
  TransactionListMockData,
  TransactionItem,
} from '../../model/transaction.model';
import { Pageable } from '../../model/public.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _http = inject(HttpClient);

  getTransactionList(
    params: FilterParams
  ): Observable<Pageable<TransactionItem>> {
    return of(TransactionListMockData);
    return this._http.get<Pageable<TransactionItem>>('/api/transactionList', {
      params: { ...params },
    });
  }
}
