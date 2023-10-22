import {Injectable} from '@angular/core';
import {Sidebar} from "../types";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly commonSidebar: Sidebar = [
    {
      name: 'a',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        }, {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'b',
      list: [
        {
          value: 'value1',
          link: 'defaultLanguage1',
        },
        {
          value: 'value2',
          link: 'defaultLanguage2',
        },
      ],
    },
  ];


  commonNavigation(): Observable<Sidebar> {
    return of(this.commonSidebar)
  }
}
