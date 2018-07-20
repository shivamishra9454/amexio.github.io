/**
 * Created by ketangote on 11/23/17.
 */


/*
Component Name : Amexio tree filter 
Component Selector : <amexio-tree-filter-view>
Component Description : A Expandable Tree Component for Angular, having Filtering functionality.
*/
import { ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonDataService } from "../../services/data/common.data.service";

@Component({
  selector: 'amexio-treeview', templateUrl: './tree.component.html', styleUrls: ['./tree.component.scss']
})
export class AmexioTreeViewComponent {
  private componentLoaded: boolean;
  /*
Properties 
name : data
datatype : any
version : 4.0 onwards
default : none
description : Local Data binding.
*/
_data: any;
@Input('data')
 set data(value: any[]) {
   this._data = value;
   if (this.componentLoaded) {
     this.updateComponent();
   }
 }
 get data(): any[] {
   return this._data;
 }

  /*
Properties 
name : http-url
datatype : string
version : 4.0 onwards
default : none
description : REST url for fetching data.
*/
  @Input('http-url') httpurl: string;

  /*
Properties 
name : http-method
datatype : string
version : 4.0 onwards
default : none
description : Type of HTTP call, POST,GET etc.
*/
  @Input('http-method') httpmethod: string;

  /*
Properties 
name : data-reader
datatype : string
version : 4.0 onwards
default : none
description : Key in JSON Datasource for records.
*/
  @Input('data-reader') datareader: string;

  /*
  Events 
  name : nodeClick
  datatype : none
  version : none
  default : none
  description : It will gives you clicked node data.
  */
  @Output() nodeClick: any = new EventEmitter<any>();

  /*
Properties 
name : enable-checkbox
datatype : false
version : 4.0 onwards
default : none
description : Enables checkbox for each row, this allows user for multi selection.
*/
  @Input('enable-checkbox') enablecheckbox = false;

  /*
Properties 
name : templates
datatype : any
version : 4.0 onwards
default : none
description : user can add any template to tree
*/
  @Input() templates: any;

  /*
  Properties 
  name : enable-drag
  datatype : boolean
  version : 5.0.0 onwards
  default : false
  description : nodes can be dragged
  */
  @Input('enable-drag') enabledrag: boolean;

  /*
  Properties 
  name : enable-drop
  datatype : boolean
  version : 5.0.0 onwards
  default : false
  description : any node can be dropped in the tree structure
  */
  @Input("enable-drop") enabledrop: boolean = false;

  /*
Properties 
name : across-tree
datatype : boolean
version : 5.0.0 onwards
default : false
description : Dragging and dropping is possible across tree.
*/
  @Input("across-tree") acrosstree: boolean = false;

  /*
Properties
name :  badge
datatype : boolean
version : 5.0.0 onwards
default : false
description : Describes the badge value that has to be displayed tree node 
*/
  @Input('badge') badge: boolean;

  @Input() parentRef: any;

  @ContentChild('amexioTreeTemplate') parentTmp: TemplateRef<any>;
  /*
  Events
  name : onTreeNodeChecked
  datatype : any
  version : 4.0 onwards
  default : none
  description : It will gives whole tree data with checked flag status.
  */
  @Output() onTreeNodeChecked: any = new EventEmitter<any>();

  @Output() onDrag: any = new EventEmitter<any>();  //Emits at drag

  @Output() onDrop: any = new EventEmitter<any>();   //emits at drop

  @Output() dragover: any = new EventEmitter<any>();   //Emits at drag over

  @Input() dragData: any;

  previousValue: any;

  responseData: any;

  isNode: boolean;


  constructor(public dataService: CommonDataService, private cdf: ChangeDetectorRef) {
    this.isNode = true;
    this.acrosstree = false;
  }

  ngOnInit() {
    if (this.httpmethod && this.httpurl) {
      this.dataService.fetchData(this.httpurl, this.httpmethod).subscribe(response => {
        this.responseData = response;
      }, error => {
      }, () => {
        this.setData(this.responseData);
      });
    } else if (this.datareader && this.data) {
      this.setData(this.data);
    }
  }

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.parentTmp != null) {
        this.templates = { treeNodeTemplate: this.parentTmp };
      } else if (this.templates != null) {
        this.parentTmp = this.templates.treeNodeTemplate;
      }
    });
    this.cdf.detectChanges();
    this.componentLoaded = true;
  }

  updateComponent() {
    if (JSON.stringify(this.previousValue) != JSON.stringify(this.data) && this.previousValue != null && this.data != null) {
      this.previousValue = JSON.parse(JSON.stringify(this.data));
      this.setData(this.data);
    }
  }

  onClick(node: any) {
    node.expand = !node.expand;
  }

  onNodeClick(node: any) {
    this.nodeClick.emit(node);
    this.activateNode(this.data, node);
  }

  activateNode(data: any[], node: any) {
    for (let i = 0; i < data.length; i++) {
      if (node === data[i] && !data[i]['children']) {
        data[i]['active'] = true;
      } else {
        data[i]['active'] = false;
      }

      if (data[i]['children']) {
        this.activateNode(data[i]['children'], node);
      }
    }
  }

  setData(httpResponse: any) {
    //Check if key is added?
    let responsedata = httpResponse;
    if (this.datareader != null) {
      let dr = this.datareader.split(".");
      for (let ir = 0; ir < dr.length; ir++) {
        responsedata = responsedata[dr[ir]];
      }
    } else {
      responsedata = httpResponse;
    }
    this.data = responsedata;
    this.parentRef = this.data;

    this.activateNode(this.data, null);
  }


  emitCheckedData(checkedData: any) {
    checkedData.checked = !checkedData.checked;

    if (checkedData.checked) {
      if (checkedData.hasOwnProperty('children')) {
        checkedData.children.forEach((option: any) => {
          option.checked = true;
          if (option.hasOwnProperty('children')) {
            this.setCheckedStatusFromParent(option);
          }
        });
      }
      this.onTreeNodeChecked.emit(this.data);
    } else {
      if (checkedData.hasOwnProperty('children')) {
        checkedData.children.forEach((option: any) => {
          option.checked = false;
          if (option.hasOwnProperty('children')) {
            this.searchObject(option);
          }
        });
      }
      this.onTreeNodeChecked.emit(this.data);
    }

  }

  searchObject(object: any) {
    object.children.forEach((childOption: any) => {
      childOption.checked = false;
      if (childOption.hasOwnProperty('children')) {
        this.searchObject(childOption);
      }
    });
  }


  setCheckedStatusFromParent(object: any) {
    object.children.forEach((childOption: any) => {
      childOption.checked = true;
      if (childOption.hasOwnProperty('children')) {
        this.setCheckedStatusFromParent(childOption);
      }
    });
  }

  onTreeNodeCheck(data: any) {
    this.onTreeNodeChecked.emit(this.data);
  }

  //Method to drag parent with node

  onDragStart(dragData: any) {
    dragData.event.dataTransfer.setData("treenodedata", JSON.stringify(dragData.data));
    dragData.event.dataTransfer.effectAllowed = "copy";
    this.dragData = dragData;
    this.onDrag.emit(dragData);
  }

  allowDrop(dragOverData: any) {
    dragOverData.event.preventDefault();
    if (!this.enabledrop) {
      dragOverData.event.dataTransfer.dropEffect = "none";
    }
    this.noDragMethod(this.dragData, dragOverData.data, dragOverData.event);
    this.dragover.emit(dragOverData);
  }

  noDragMethod(dragData: any, node: any, event: any) {
    if (!this.acrosstree) {
      if (dragData.data == node || node.leaf == true) {
        event.dataTransfer.dropEffect = "none"
      }
      else {
        event.target.style.border = "3px dotted green";
      }
    } else {
      if (node.leaf == true) {
        event.dataTransfer.dropEffect = "none"
      } else {
        event.target.style.border = "3px dotted green";
      }
    }
    if (dragData.data.hasOwnProperty('children')) {
      this.getDropNode(dragData, node, event);
    }
  }

  getDropNode(dragData: any, node: any, event: any) {
    dragData.data.children.forEach((child: any) => {
      if (JSON.stringify(child) == JSON.stringify(node) || node.leaf == true) {
        event.dataTransfer.dropEffect = "none"
      }
      else if (child.hasOwnProperty('children')) {
        this.getDropNode(child.children, node, event);
      }
    });
  }


  drop(dropData: any) {
    if (this.enabledrop) {
      dropData.event.target.style.border = "";
      dropData.event.preventDefault();
      if (this.acrosstree == false) {
        if (this.dragData.data == dropData.data) {
          this.isNode = false;
        }
        else if (this.dragData.data.hasOwnProperty('children')) {
          this.checkNode(this.dragData, dropData);
        }
        if (this.isNode == true) {
          if (dropData.data.hasOwnProperty('children')) {
            this.removeNode(dropData);
            dropData.data.children.push(JSON.parse(dropData.event.dataTransfer.getData('treenodedata')));
            this.onDrop.emit(dropData);
          }
        }
      } else {
        if (dropData.data.hasOwnProperty('children')) {
          this.removeNode(dropData);
          dropData.data.children.push(JSON.parse(dropData.event.dataTransfer.getData('treenodedata')));
          this.onDrop.emit(dropData);
        }
      }
    }
  }

  checkNode(dragData: any, dropData: any) {
    this.dragData.data.children.forEach((child: any) => {
      if (JSON.stringify(child) == JSON.stringify(dropData.data)) {
        this.isNode = false;
      }
      else if (child.hasOwnProperty('children')) {
        this.checkNode(child, dropData);
      }
    });
  }

  removeNode(data: any) {
    this.removeDragNode(this.parentRef, JSON.parse(data.event.dataTransfer.getData('treenodedata')));
  }

  removeDragNode(treeData: any, dragNode: any) {
    treeData.forEach((childNode: any, index: number) => {
      if (JSON.stringify(childNode) == JSON.stringify(dragNode)) {
        treeData.splice(index, 1);
      } else if (childNode.hasOwnProperty('children')) {
        this.removeDragNode(childNode.children, dragNode);
      }
    });
  }

  dragleave(event: any) {
    event.target.style.border = "";
  }
}
