import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Color, Label, SingleDataSet } from 'ng2-charts';
import { ITypePercentage } from '../interface/task.interface';
import { ServicestaskService } from '../servicestask.service';

@Component({
  selector: 'app-componentshome',
  templateUrl: './componentshome.component.html',
  styleUrls: ['./componentshome.component.css']
})
export class ComponentshomeComponent implements OnInit {

  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      display: false,
    },
    cutoutPercentage: 80,
  };
  public doughnutChartLabels: Label[] = ['done','pending','todo'];
  public doughnutChartData: SingleDataSet = [10,10,10];
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartColor: Color[] = [
    { backgroundColor: ['#f68059', '#ffbf3a', '#4e3dc8'] },
  ];
  public typeData: Array<ITypePercentage> = [];
  constructor(private taskService: ServicestaskService) { }

  ngOnInit(): void {
    this.getTypePercentage();
  }
  getTypePercentage() {
    this.doughnutChartData = [];
    this.doughnutChartLabels = [];
    this.taskService.getTypePercentage().subscribe(
      (d) => {
        this.typeData = d;
        d.forEach((type: ITypePercentage) => {
          this.doughnutChartData.push(type.count);
          this.doughnutChartLabels.push(type.type);
        });
      },
      (error) => {
        console.error(error);
      }
    );
  }
  refreshEmitter() {
    this.getTypePercentage();
  }

}
