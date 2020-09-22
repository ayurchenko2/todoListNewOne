export class TaskList {
  name: string;
  done: boolean;
}

export class GroupList {
  groupName: string;
  tasks: TaskList[];
  totalDone: number;
}
