import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  tasks: any[] = [];
  newTask = { title: '', description: '' };

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.api.getTasks().subscribe((res: any) => {
      this.tasks = res;
    });
  }

  addTask() {
    this.api.createTask(this.newTask).subscribe(() => {
      this.newTask = { title: '', description: '' };
      this.loadTasks();
    });
  }

  deleteTask(id: string) {
    this.api.deleteTask(id).subscribe(() => {
      this.loadTasks();
    });
  }
}
