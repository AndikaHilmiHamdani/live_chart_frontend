import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { TokenStorageService } from './_services/token-storage.service';
// import io from 'socket.io-client';

// const socket = io('ws://localhost:3000');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  // title = 'dashboard';
  // chart: any;
  // chart2 = [];
  // pie: any;
  // doughnut: any;

  // data1 = [];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {

    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    // this.chart = new Chart('bar', {
    //   type: 'bar',
    //   options: {
    //     responsive: true,
    //   },
    //   data: {
    //     labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    //     datasets: [
    //       {
    //         type: 'bar',
    //         label: 'My First dataset',
    //         data: [243, 156, 365, 30, 156, 265, 356, 543],
    //         backgroundColor: 'rgba(255,0,255,0.4)',
    //         borderColor: 'rgba(255,0,255,0.4)',
    //         // fill: false,
    //       },
    //       // {
    //       //   type: 'line',
    //       //   label: 'Dataset 2',
    //       //   backgroundColor: 'rgba(0,0,255,0.4)',
    //       //   borderColor: 'rgba(0,0,255,0.4)',
    //       //   data: [
    //       //     443, 256, 165, 100, 56, 65, 35, 543
    //       //   ],
    //       //   fill: true,
    //       // },
    //       {
    //         type: 'bar',
    //         label: 'My Second dataset',
    //         data: [243, 156, 365, 30, 156, 265, 356, 543].reverse(),
    //         backgroundColor: 'rgba(0,0,255,0.4)',
    //         borderColor: 'rgba(0,0,255,0.4)',
    //       },
    //     ],
    //   },
    // });

    // let options = {
    //   // aspectRatio: 1,
    //   // legend: false,
    //   tooltips: false,

    //   elements: {
    //     point: {
    //       borderWidth: function (context: any) {
    //         return Math.min(Math.max(1, context.datasetIndex + 1), 8);
    //       },
    //       hoverBackgroundColor: 'transparent',
    //       hoverBorderColor: function (context: any) {
    //         return 'red';
    //       },
    //       hoverBorderWidth: function (contex: any) {
    //         var value = contex.dataset.data[contex.dataIndex];
    //         return Math.round((8 * value.v) / 1000);
    //       },
    //       radius: function (context: any) {
    //         var value = context.dataset.data[context.dataIndex];
    //         var size = context.chart.width;
    //         var base = Math.abs(value.v) / 1000;
    //         return (size / 24) * base;
    //       },
    //     },
    //   },
    // };

    // new Chart('bubble', {
    //   type: 'bubble',
    //   options: options,
    //   data: {
    //     datasets: [
    //       {
    //         backgroundColor: 'rgba(255,0,0,0.4)',
    //         label: 'Name 1',
    //         data: [
    //           {
    //             x: 50,
    //             y: 60,
    //             v: 200,
    //           },
    //           {
    //             x: 50,
    //             y: 80,
    //             v: 700,
    //           },
    //           {
    //             x: 80,
    //             y: 60,
    //             v: 100,
    //           },
    //           {
    //             x: 60,
    //             y: 60,
    //             v: 500,
    //           },
    //           {
    //             x: 90,
    //             y: 80,
    //             v: 800,
    //           },
    //         ],
    //       },
    //       {
    //         backgroundColor: 'rgba(0,255,0,0.4)',
    //         label: 'Name 2',
    //         data: [
    //           {
    //             x: 60,
    //             y: 20,
    //             v: 200,
    //           },
    //           {
    //             x: 55,
    //             y: 70,
    //             v: 800,
    //           },
    //           {
    //             x: 80,
    //             y: 30,
    //             v: 500,
    //           },
    //           {
    //             x: 70,
    //             y: 40,
    //             v: 800,
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // });

    // this.doughnut = new Chart('doughnut', {
    //   type: 'doughnut',
    //   options: {
    //     responsive: true,
    //     animation: {
    //       animateScale: true,
    //       animateRotate: true,
    //     },
    //   },
    //   data: {
    //     datasets: [
    //       {
    //         data: [45, 10, 5, 25, 15],
    //         backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    //         label: 'Dataset 1',
    //       },
    //     ],
    //     labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    //   },
    // });

    // this.pie = new Chart('pie', {
    //   type: 'pie',
    //   options: {
    //     responsive: true,
    //     animation: {
    //       animateScale: true,
    //       animateRotate: true,
    //     },
    //   },
    //   data: {
    //     datasets: [
    //       {
    //         data: [45, 10, 5, 25, 15].reverse(),
    //         backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue'],
    //         label: 'Dataset 1',
    //       },
    //     ],
    //     labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
    //   },
    // });
    // socket.on('data1', (res) => {
    //   this.updateChartData(this.chart, res, 0);
    //   this.updateChartData(this.doughnut,res.slice(0,5), 0);
    // })

    // socket.on('data2', (res) => {
    //   this.updateChartData(this.chart, res, 1);
    // })
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  // addData(chart: any, label: any, data: any) {
  //   chart.data.labels.push(label);
  //   chart.data.datasets.forEach((dataset: any) => {
  //     dataset.data.push(data);
  //   });
  //   chart.update();
  // }

  // removeData(chart: any) {
  //   chart.data.labels.pop();
  //   chart.data.datasets.forEach((dataset: any) => {
  //     dataset.data.pop();
  //   });
  //   chart.update();
  // }

  // updateChartData(chart: any, data: any, dataSetIndex: any) {
  //   console.log(chart);
  //   console.log(dataSetIndex);
  //   chart.data.datasets[dataSetIndex].data = data;
  //   chart.update();
  // }

  
}
