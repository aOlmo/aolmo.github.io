import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp',
  templateUrl: './exp.component.html',
  styleUrls: ['../../stylesheets/styles.css', '../../stylesheets/pygment_trac.css', './exp.component.css']
})

export class ExpComponent {
  exps = [
    {
      "title": "Research Assistant at ASU",
      "dates": ["Aug 2018", "May 2023"],
      "place": "Arizona State University",
      "descr": "I am a Research Assistant at the <a href='https://yochan-lab.github.io/home/'> Planning and Artificial Intelligence lab </a> under the supervision of professor Subbarao Kambhampati at Arizona State University."
    },
    {
      "title": "Research Assistant at UAB",
      "dates": ["Jan 2018", "Jun 2018"],
      "place": "Universitat Autónoma de Barcelona",
      "descr": "I worked as a Research Assistant developing the toolchain for the  <a href='https://github.com/HPCA4SE-UAB/MATE'> Monitoring Analysis and Tuning Environment</a> (MATE) software at Universitat Autònoma de Barcelona."
    },
    {
      "title": "Front-End Developer at Delectatech",
      "dates": ["Jan 2016", "Jun 2016"],
      "place": "Delectatech",
      "descr": "I was a front-end developer in AngularJS, Javascript, HTML5 and CSS3. Cide developed under Scrum's Agile principles."
    }
  ]
}
