import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CheckList for Parents and Child Structure with Expand/ Collapse';
  data: any;

  constructor() {
    this.data = {};
    this.data.isAllSelected = false;
    this.data.isAllCollapsed = false;

    //List object having hierarchy of parents and its children
    this.data.ParentChildchecklist = [
      {
        id: 1, value: 'Elenor Anderson', isSelected: false, isClosed: false,
        childList: [
          {
            id: 1, parent_id: 1, value: 'child 1', isSelected: false
          },
          {
            id: 2, parent_id: 1, value: 'child 2', isSelected: false
          }
        ]
      },
      {
        id: 2, value: 'Caden Kunze', isSelected: false, isClosed: false, childList: [
          {
            id: 1, parent_id: 1, value: 'child 1', isSelected: false
          },
          {
            id: 2, parent_id: 1, value: 'child 2', isSelected: false
          }
        ]
      },
      {
        id: 3, value: 'Ms. Hortense Zulauf', isSelected: false, isClosed: false,
        childList: [
          {
            id: 1, parent_id: 1, value: 'child 1', isSelected: false
          },
          {
            id: 2, parent_id: 1, value: 'child 2', isSelected: false
          }
        ]
      }
    ];
  }

  //Click event on parent checkbox  
  parentCheck(parentObj) {
    for (var i = 0; i < parentObj.childList.length; i++) {
      parentObj.childList[i].isSelected = parentObj.isSelected;
    }
  }

  //Click event on child checkbox  
  childCheck(parentObj, childObj) {
    parentObj.isSelected = childObj.every(function (itemChild: any) {
      return itemChild.isSelected == true;
    })
  }

  //Click event on master select
  selectUnselectAll(obj) {
    obj.isAllSelected = !obj.isAllSelected;
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isSelected = obj.isAllSelected;
      for (var j = 0; j < obj.ParentChildchecklist[i].childList.length; j++) {
        obj.ParentChildchecklist[i].childList[j].isSelected = obj.isAllSelected;
      }
    }
  }

  //Expand/Collapse event on each parent
  expandCollapse(obj) {
    obj.isClosed = !obj.isClosed;
  }

  //Master expand/ collapse event
  expandCollapseAll(obj) {
    for (var i = 0; i < obj.ParentChildchecklist.length; i++) {
      obj.ParentChildchecklist[i].isClosed = !obj.isAllCollapsed;
    }
    obj.isAllCollapsed = !obj.isAllCollapsed;
  }

  //Just to show updated JSON object on view
  stringify(obj) {
    return JSON.stringify(obj);
  }
}
