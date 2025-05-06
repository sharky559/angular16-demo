import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  FilterParams,
  TransactionItem,
  TransactionItemDetail,
} from '../../model/transaction.model';
import { Pageable } from '../../model/public.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private _http = inject(HttpClient);

  getTransactionList(
    params: FilterParams
  ): Observable<Pageable<TransactionItem>> {
    return this._http.get<Pageable<TransactionItem>>('/api/transactionList', {
      params: { ...params },
    });
  }

  getTransactionDetail(
    transactionId: number
  ): Observable<TransactionItemDetail> {
    return this._http.get<TransactionItemDetail>('/api/transactionDetail', {
      params: { transactionId },
    });
  }
}
