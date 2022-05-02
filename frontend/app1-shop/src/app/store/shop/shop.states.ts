import { Shop } from './shop.actions';
import { Action, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';

export interface ShopModel {
  list?: Shop[];
}

@State<ShopModel>({
  name: 'shop',
  defaults: {
    list: undefined,
  },
})
@Injectable({
  providedIn: 'root',
})
export class ShopState {
  constructor() {
  }

  @Action(Shop.Get)
  get({getState, setState}: StateContext<ShopModel>) {
    let list = getState().list;
    if (!!list) {
      return;
    }
    const listNew: any[] = [];
    for (let i = 0; i < 25; i++) {
      listNew.push({
        title: '微软（Microsoft）日版 Xbox Series S 新世代主机 家用家庭高清电视游',
        storeName: '数码海外京东自营专区',
        pic: 'https://img10.360buyimg.com/n7/jfs/t1/184935/32/24126/81050/625e67e6E3800775d/71d28ddf287dceca.jpg',
        collect: false,
      });
    }
    setState({
      list: listNew,
    });
  }
}
