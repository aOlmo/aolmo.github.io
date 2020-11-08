import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.css']
})
export class ExpComponent {
  exps = [
    {
      "title": "Research Assistant",
      "dates": ["08/2018", "Present"],
      "place": "Arizona State University",
      "descr": "Research Assistant in the Planning and Artificial Intelligence lab under the supervision of professor Subbarao Kambhampati at Arizona State University."
    },
    {
      "title": "Research Assistant",
      "dates": ["01/2018", "06/2018"],
      "place": "Universitat Autónoma de Barcelona",
      "descr": "Part-time Research Assistant developing the toolchain for the Monitoring Analysis and Tuning Environment (MATE) software at Universitat Autònoma de Barcelona."
    },
    {
      "title": "Front-End Developer",
      "dates": ["01/2016", "06/2016"],
      "place": "Delectatech",
      "descr": "Front-end developer in AngularJS, Javascript, HTML5 and CSS3."
    }
  ]
}
