import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { ITask, ITaskTypeOption, ITypePercentage } from './interface/task.interface';
@Injectable({
  providedIn: 'root'
})
export class  ServicestaskService {

  constructor(private http:HttpClient) { }

  getTaskList():Observable<Array<ITask>>{
   return this.http.get('http://localhost:8080/api/v1/task')
   .pipe(map((d: Array<ITask>) => d));
  }
  postTaskList(task: ITask): Observable<ITask> {
    return this.http
      .post('http://localhost:8080/api/v1/task', task)
      .pipe(map((d: ITask) => d));
  }
  getTypeOptions(): Array<ITaskTypeOption> {
    return [{ type: 'done' }, { type: 'todo' }, { type: 'pending' }];
  }
  getTaskById(id: string): Observable<ITask> {
    return this.http
      .get(`http://localhost:8080/api/v1/task/${id}`)
      .pipe(map((d: ITask) => d));
  }
  getTypePercentage(): Observable<Array<ITypePercentage>> {
    return this.http
      .get(`http://localhost:8080/api/v1/task/vData/percentcountType`)
      .pipe(map((d: Array<ITypePercentage>) => d));
  }
  updateTask(task: ITask, id: string): Observable<ITask> {
    return this.http
      .put(`http://localhost:8080/api/v1/task/${id}`, task)
      .pipe(map((d: ITask) => d));
  }
  deleteTask(id: string) {
    return this.http.delete(`http://localhost:8080/api/v1/task/${id}`);
  }
}
