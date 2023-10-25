import {Injectable} from '@angular/core';
import {Sidebar} from "../types";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private readonly commonSidebar: Sidebar = [
    {
      name: 'Hairdressing services',
      list: [
        {
          value: 'Hair cutting',
          link: 'Hair cutting',
        },
        {
          value: 'Hair coloring',
          link: 'Hair coloring',
        }, {
          value: 'Hair extensions',
          link: 'Hair extensions',
        },
        {
          value: 'Hair care',
          link: 'Hair care',
        },
      ],
    }, {
      name: 'Nail service',
      list: [
        {
          value: 'Manicure',
          link: 'Manicure',
        },
        {
          value: 'Pedicure',
          link: 'Pedicure',
        },
      ],
    }, {
      name: 'Body care',
      list: [
        {
          value: 'Massage',
          link: 'Massage',
        },
        {
          value: 'SPA',
          link: 'Spa',
        },
      ],
    }, {
      name: 'Makeup',
      list: [
        {
          value: 'Wedding makeup',
          link: 'Wedding makeup',
        },
        {
          value: 'Prom makeup',
          link: 'Prom makeup',
        },
        {
          value: 'Evening makeup',
          link: 'Evening makeup',
        },
        {
          value: 'Daytime makeup',
          link: 'Daytime makeup',
        },
      ],
    }, {
      name: 'Cosmetology',
      list: [
        {
          value: 'Facial care',
          link: 'Facial care',
        },
        {
          value: 'Facial cleansing',
          link: 'Facial cleansing',
        },
        {
          value: 'Peeling',
          link: 'Peeling',
        },
        {
          value: 'Elimination of aesthetic shortcomings',
          link: 'Elimination of aesthetic shortcomings',
        },
      ],
    }, {
      name: 'Eyebrows',
      list: [
        {
          value: 'Eyebrow correction',
          link: 'defaultLanguage1',
        },
        {
          value: 'Eyebrow Modeling',
          link: 'defaultLanguage2',
        },
        {
          value: 'Lamination of eyebrows',
          link: 'defaultLanguage2',
        },
        {
          value: 'Eyebrow coloring',
          link: 'defaultLanguage2',
        },
        {
          value: 'Eyebrow Restoration',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'Eyelash',
      list: [
        {
          value: 'Eyelash extensions',
          link: 'defaultLanguage1',
        },
        {
          value: 'Eyelash correction',
          link: 'defaultLanguage2',
        },
        {
          value: 'Lamination of eyelashes',
          link: 'defaultLanguage2',
        },
        {
          value: 'Removing eyelashes',
          link: 'defaultLanguage2',
        },
      ],
    }, {
      name: 'Sign In',
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
    }
  ];


  commonNavigation(): Observable<Sidebar> {
    return of(this.commonSidebar)
  }

}
