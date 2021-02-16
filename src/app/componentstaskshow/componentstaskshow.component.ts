import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ITask, ITaskTypeOption } from 'src/app/interface/task.interface';
import { ServicestaskService } from '../servicestask.service';

@Component({
  selector: 'app-componentstaskshow',
  templateUrl: './componentstaskshow.component.html',
  styleUrls: ['./componentstaskshow.component.css']
})
export class ComponentstaskshowComponent implements OnInit {
  taskForm: FormGroup;
  typeOptions: Array<ITaskTypeOption> = [];
  constructor(
    public dialogRef: MatDialogRef<ComponentstaskshowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ITask,
    private fb: FormBuilder,
    private taskService: ServicestaskService
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.taskService.getTypeOptions();

    this.showTask();
  }

  showTask() {
    this.taskService.getTaskById(this.data.id).subscribe(
      (d: ITask) => {
        this.taskForm.controls['title'].setValue(d.title);
        this.taskForm.controls['type'].setValue(d.type);
        this.taskForm.controls['description'].setValue(d.description);
        this.taskForm.controls['dueDate'].setValue(new Date(d.dueDate).toISOString());

      },
      (error) => console.error(error)
    );
  }
  updateTask() {
    this.taskService.updateTask(this.taskForm.value, this.data.id).subscribe(
      (d) => {
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.data.id).subscribe(
      (d) => {
        console.log(d);
        this.dialogRef.close();
      },
      (error) => console.error(error)
    );
  }
}
