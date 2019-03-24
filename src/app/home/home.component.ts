import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { User } from '../user/user';
import { Chart } from 'chart.js';
import { AtividadeService } from '../atividade/atividade.service';
import { Atividade } from '../atividade/atividade';
import { UserService } from '../user/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css'],
  providers: [ AtividadeService, UserService ]
})
export class HomeComponent implements OnInit{
  currentUser: string;
  user: any = {};

  //chart
  barChart=[];
  data = [];
  count_class1 = 0;
  count_class2 = 0;
  count_class3 = 0;

  atividades: Atividade[];
  class1: Atividade[];
  class2: Atividade[];
  class3: Atividade[];

  constructor(private http: HttpClient,
    private router: Router,
    private authService:AuthService,
    private atividadeService: AtividadeService,
    private userService: UserService) {
      //this.authService.currentUser.subscribe(x => this.currentUser = x);
      this.currentUser = localStorage.getItem('currentUser');
    }

    ngOnInit() {
      this.userService.getByUsername(this.currentUser)
      .subscribe(user => {
        this.user = user;
      });

      var user = localStorage.getItem('usuario');
      this.atividadeService.getAtividade(user).subscribe(
        (atividades: Atividade[]) => {
          // slit the arrays according to the classification
          var filterStatus =  atividades.filter(function(atividade) {
            return atividade.status == 'New' || atividade.status == 'Ongoing';
          })
          this.atividades = filterStatus;

          let classLabels = ['Precisa ser feito','Planeje/Delegue','Quando possível'];

          var class1 =  filterStatus.filter(function(atividade) {
            return atividade.classificacao == 1;
          });
          this.class1 = class1;
          var class2 =  filterStatus.filter(function(atividade) {
            return atividade.classificacao == 2;
          });
          this.class2 = class2;
          var class3 =  filterStatus.filter(function(atividade) {
            return atividade.classificacao == 3;
          });
          this.class3 = class3;

          // lenght of each array
          this.data.push((this.class1.length*100)/this.atividades.length);
          this.data.push((this.class2.length*100)/this.atividades.length);
          this.data.push((this.class3.length*100)/this.atividades.length);

          this.count_class1 = this.class1.length;
          this.count_class2 = this.class2.length;
          this.count_class3 = this.class3.length;

          // Bar Chart creation using chart.js
          this.barChart  = new Chart('barChart', {
            type: 'bar',
            data: {
              labels: classLabels,
              datasets: [{
                label: 'Atividades x Classificação',
                data: this.data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
              }]
            },
            options: {
              title:{
                text:"# Classificação",
                display:false
              },
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero:true
                  }
                }]
              }
            }
          });
        });

      }
    }
