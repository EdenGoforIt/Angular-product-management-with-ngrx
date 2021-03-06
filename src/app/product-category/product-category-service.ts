import { Injectable } from '@angular/core';
import { ProductCategory } from './product-category';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private http: HttpClient) {}
  private productCategoryUrl = 'api/productCategories';

  getProductCategories(): Observable<ProductCategory[]> {
    return this.http
      .get<ProductCategory[]>(this.productCategoryUrl)
      .pipe(catchError(this.handleError));
  }

  updateProductCategory(
    productCategory: ProductCategory
  ): Observable<ProductCategory> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productCategoryUrl}/${productCategory.id}`;
    return this.http
      .put<ProductCategory>(url, productCategory, { headers })
      .pipe(
        tap(() => console.log('update product category', +productCategory.id)),
        map(() => productCategory),
        catchError(this.handleError)
      );
  }
  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
