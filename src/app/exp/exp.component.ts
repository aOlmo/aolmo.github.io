import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})

export class ExpComponent {
  exps = [
    {
      "title": "Research Assistant at ASU",
      "dates": ["08/2018", "Present"],
      "place": "Arizona State University",
      "descr": "Research Assistant in the Planning and Artificial Intelligence lab under the supervision of professor Subbarao Kambhampati at Arizona State University."
    },
    {
      "title": "Research Assistant at UAB",
      "dates": ["01/2018", "06/2018"],
      "place": "Universitat Autónoma de Barcelona",
      "descr": "I worked as a part-time Research Assistant developing the toolchain for the  <a href='https://github.com/HPCA4SE-UAB/MATE'> Monitoring Analysis and Tuning Environment</a> (MATE) software at Universitat Autònoma de Barcelona."
    },
    {
      "title": "Front-End Developer at Delectatech",
      "dates": ["01/2016", "06/2016"],
      "place": "Delectatech",
      "descr": "I was a front-end developer in AngularJS, Javascript, HTML5 and CSS3. In this company I also put Agile methodologies in practice."
    }
  ]
}
