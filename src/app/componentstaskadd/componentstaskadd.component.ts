import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ITaskTypeOption } from '../interface/task.interface';
import { ServicestaskService } from '../servicestask.service';

@Component({
  selector: 'app-componentstaskadd',
  templateUrl: './componentstaskadd.component.html',
  styleUrls: ['./componentstaskadd.component.css']
})
export class ComponentstaskaddComponent implements OnInit {
  taskForm: FormGroup;
  typeOptions: Array<ITaskTypeOption> = [];
  constructor(
    private fb: FormBuilder,
    private taskService: ServicestaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      dueDate: ['', Validators.required],
      type: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.typeOptions = this.taskService.getTypeOptions();
  }

  addTask() {
    this.taskService.postTaskList(this.taskForm.value).subscribe(
      (d) => {
        console.log(d);
        this.router.navigateByUrl('/');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
