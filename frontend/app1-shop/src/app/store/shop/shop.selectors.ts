import { Selector } from '@ngxs/store';
import { ShopModel, ShopState } from './shop.states';
import { Shop } from './shop.actions';

export class ShopSelectors {
  @Selector([ShopState])
  static list({list}: ShopModel): Shop[] {
    return list || [];
  }
}
