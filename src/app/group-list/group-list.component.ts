import { Component, OnInit } from '@angular/core';
import { GroupList } from '../groupClass';
import { GROUPS } from '../defaultGroups';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.css']
})
export class GroupListComponent implements OnInit {

  constructor() { }

  groupTasks = GROUPS;
  selectedGroupTasks: GroupList;

  ngOnInit(): void {

  }

  onSelect(groupList: GroupList): void {
    this.selectedGroupTasks = groupList;
  }

  addGroup(newGroup: string): void {
    if(newGroup!=='')
      this.groupTasks.push({ groupName: newGroup, tasks: [], totalDone: 0 });
  }
}
