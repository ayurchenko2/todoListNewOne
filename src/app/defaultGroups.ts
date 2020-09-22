import { GroupList } from './groupClass';
import { DoneRadio } from './radioDoneValues';


export const GROUPS: GroupList[] = [
  { groupName: 'Homeworks', tasks:  [
                                      { name: 'Task1', done: false },
                                      { name: 'Task1,5', done: true },
                                      { name: 'Task2', done: false }
                                    ], totalDone: 1},
  { groupName: 'Shopping', tasks:  [
                                      { name: 'Task3', done: false },
                                      { name: 'Task3,5', done: true },
                                      { name: 'Task3,99', done: true },
                                      { name: 'Task4', done: false }
                                    ], totalDone: 2},
  { groupName: 'Others', tasks:  [
                                      { name: 'Task5', done: true },
                                      { name: 'Task6', done: false }
                                    ], totalDone: 1}
];

export const DoneRadioList: DoneRadio[] = [
  {
    name:'All',
    value:'all',
    status:true
  },
  {
    name:'Undone',
    value:'undone',
    status:false
   }
];
