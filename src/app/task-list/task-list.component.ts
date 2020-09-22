import { Component, OnInit, Input } from '@angular/core';
import { GroupList } from '../groupClass';
import { DoneRadioList } from '../defaultGroups';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  @Input() groupList: GroupList;

  constructor() { }

  doneRadioValues = DoneRadioList;
  radioSelected="all";

  ngOnInit(): void {
  }

  updateDoneTask(): void {
    for(var i = 0; i<this.groupList.tasks.length; i++)
    {
      if(this.groupList.totalDone != countOfDoneTasks(this.groupList.tasks)){
        setTimeout(() => this.groupList.totalDone = countOfDoneTasks(this.groupList.tasks));
      }
    }
  }

  addTask(textTask: string):void {
    if(textTask!=='')
      this.groupList.tasks.push({ name: textTask, done: false });
  }

  onItemChange(value){
   console.log(" Value is : ", value );
   /*if(value=='all')
     this.groupListFiltered = this.groupList;
   else
     this.groupListFiltered = this.groupList.tasks( x => x.done == false)*/
 }
}

function countOfDoneTasks(array) {
  var count = 0;
  for (var i = 0; i < array.length; i++) {
   if (array[i].done === true) {
     count += 1;
     }
   }
   return count;
};
