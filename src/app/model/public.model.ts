export interface BaseQueryParams {
  pageNow: number; 
  pageSize: number;
  /** 排序参数，如 "name asc" */
  sort?: string;
}

export interface Pageable<T> {
  pageable: {
    hasNext: boolean;
    hasPre: boolean;
    isFirst: boolean;
    isLast: boolean;
    pageNow: number;
    pageSize: number;
    totalCount: number;
    totalPageCount: number;
  };
  list: T[];
}
