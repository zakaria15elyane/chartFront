import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { Observable } from 'rxjs';
import { ComponentshomeComponent } from '../componentshome/componentshome.component';
import { ComponentstaskshowComponent } from '../componentstaskshow/componentstaskshow.component';
import { ITask } from '../interface/task.interface';
import { ServicestaskService } from '../servicestask.service';

@Component({
  selector: 'app-componentstasklist',
  templateUrl: './componentstasklist.component.html',
  styleUrls: ['./componentstasklist.component.css']
})
export class ComponentstasklistComponent implements OnInit {
  @Output() refreshEmitter = new EventEmitter<boolean>();
tasks:Observable<Array<ITask>>;
  constructor(private taskService:ServicestaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
   this.tasks=this.taskService.getTaskList()
  }
  onOpenDialog(task: ITask) {
    const dialogRef = this.dialog.open(ComponentstaskshowComponent, {
      data: task,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getTasks();
      this.refreshEmitter.emit(true);
    });
}
}
