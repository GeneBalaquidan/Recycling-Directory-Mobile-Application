import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Bakal",
    "icon": "assets/icon/bakal.jpg",
    "about": "Kahit anong uri ng bakal.",
  };


  constructor(public http: Http) {
    let items = [
      
      {
        "name": "Bakal",
        "profilePic": "assets/icon/bakal.jpg",
        "about": "Bakal_Info"
      },
      

      {
        "name": "Baterya",
        "profilePic": "assets/icon/baterya.jpg",
        "about": "Baterya_Info"
      },

      {
        "name": "Bote",
        "profilePic": "assets/icon/bote.jpg",
        "about": "Bote_Info"
      },

      {
        "name": "Papel",
        "profilePic": "assets/icon/papel.jpg",
        "about": "Papel_Info"
      },

      {
        "name": "Plastik",
        "profilePic": "assets/icon/plastic.jpg",
        "about": "Plastik_Info"
      },

    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
