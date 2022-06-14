import { ComponentFixture, TestBed } from '@angular/core/testing';
import { combineReducers, Store, StoreModule } from '@ngrx/store';
import * as fromProduct from '../state/product.reducer';
import { ProductShellComponent } from './product-shell.component';
import * as fromRoot from '../../state/app.state';
import { provideMockStore } from '@ngrx/store/testing';

describe('Product Shell Component', () => {
  let component: ProductShellComponent;
  let fixture: ComponentFixture<ProductShellComponent>;
  let store: Store<fromProduct.ProductState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // StoreModule.forRoot({
        //   feature: combineReducers(fromProduct.productReducer),
        // }),
      ],
      declarations: [ProductShellComponent],
      providers: [provideMockStore({})],
    });

    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();

    fixture = TestBed.createComponent(ProductShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should created component', () => {
    expect(component).toBeTruthy();
  });
  https://v7.ngrx.io/guide/store/testing
});
