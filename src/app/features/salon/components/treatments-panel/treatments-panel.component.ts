import { Component } from '@angular/core';
import {FlatTreeControl} from "@angular/cdk/tree";
import {MatTreeFlatDataSource, MatTreeFlattener} from "@angular/material/tree";




@Component({
  selector: 'app-treatments-panel',
  templateUrl: './treatments-panel.component.html',
  styleUrls: ['./treatments-panel.component.scss']
})
export class TreatmentsPanelComponent {
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;
}



interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Popular',
    children: [{name: 'Manicure + gel'}, {name: 'Pedicure'}, ],
  },
  {
    name: 'Nail services',
    children: [
      {
        name: 'Manicure',
        children: [{name: 'Plain Manicure'}, {name: 'Japanese Clean Manicure'}],
      },
      {
        name: 'Nail Extension',
        children: [{name: 'Nail Regular Extensions'}, {name: 'Extensions removal  '}],
      },
    ],
  },
];

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
