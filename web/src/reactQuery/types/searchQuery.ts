type OrderDirection = 'asc' | 'desc';

export interface Order {
  key?: string;
  direction?: OrderDirection;
}

export interface Pagination {
  skip?: number;
  take?: number;
}

export interface SearchQeury<T> {
  condition?: T;
  order?: Order;
  pagination?: Pagination;
}

// NOTE: 下記は各種モデルの検索クエリの型定義

export type BoardCondition = {
  condition?: {
    title?: string;
    description?: string;
  };
  order?: {
    key?: string;
    direction?: OrderDirection;
  };
  pagination?: {
    skip?: number;
    take?: number;
  };
};

export type BoardSearchQuery = SearchQeury<BoardCondition>;
