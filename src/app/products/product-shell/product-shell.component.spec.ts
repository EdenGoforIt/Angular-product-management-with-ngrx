import { ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import { ProductShellComponent } from './product-shell.component';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as AppState from '../../state/app.state';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../product';

const initialState = {
  products: {},
};
describe('ProductShellComponent', () => {
  let component: ProductShellComponent;
  let fixture: ComponentFixture<ProductShellComponent>;
  let store;

  let products$: BehaviorSubject<Product[]>;
  let products: Product[];
  // https://www.simars.io/angular-test-components-unit-shallow-deep/

  beforeEach(async () => {
    products = [
      {
        id: 1,
        productName: 'product Name',
        productCode: 'product Code',
        description: 'desc',
        starRating: 5,
      },
    ];

    products$ = new BehaviorSubject<Product[]>(products);

    await TestBed.configureTestingModule({
      declarations: [ProductShellComponent],
      providers: [
        {
          provide: Store,
          // useValue: {
          //   dispatch: JsonpClientBackend.
          // }
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(ProductShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created component', () => {
    expect(component).toBeTruthy();
  });

  // it('should dispatch toggle product code', () => {
  //   dispatchSpy = spyOn(store, 'dispatch');
  // });

  // https://www.simars.io/angular-test-components-unit-shallow-deep/

  // https://brianflove.com/2018-05-27/ngrx-testing-components/
});
