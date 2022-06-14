import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exp',
  templateUrl: './exp.component.html',
  styleUrls: ['../../stylesheets/styles.css', '../../stylesheets/pygment_trac.css', './exp.component.css']
})

export class ExpComponent {
  exps = [
    {
      "title": "Machine Learning Research Intern @ National Renewable Energy Laboratory",
      "dates": ["May 2022", "Aug 2022"],
      "place": "National Renewable Energy Laboratory",
      "descr": "I work improving and researching about the explainability of machine learning data flow models as well as their proneness to bias their predictions."
    },
    {
      "title": "Business Analytics/Statistics Intern @ University of Phoenix",
      "dates": ["May 2021", "Aug 2021"],
      "place": "University of Phoenix",
      "descr": "I worked as a business analyst applying machine learning algorithms to model and categorize user-segmentation-related tasks with graph and tabular data."
    },
    {
      "title": "Graduate Research Assistant @ ASU",
      "dates": ["Aug 2018", "Present"],
      "place": "Arizona State University",
      "descr": "I am a Research Assistant at the <a href='https://yochan-lab.github.io/home/'> Planning and Artificial Intelligence lab </a> under the supervision of professor <a href='http://rakaposhi.eas.asu.edu/'>Subbarao Kambhampati</a> at Arizona State University."
    },
    {
      "title": "Graduate Research Assistant @ UAB",
      "dates": ["Jan 2018", "Jun 2018"],
      "place": "Universitat Autónoma de Barcelona",
      "descr": "I worked as a Research Assistant developing the toolchain for the <a href='https://github.com/HPCA4SE-UAB/MATE'> Monitoring Analysis and Tuning Environment</a> (MATE) software at Universitat Autònoma de Barcelona."
    },
    {
      "title": "Front-End Developer @ Delectatech",
      "dates": ["Jan 2016", "Jun 2016"],
      "place": "Delectatech",
      "descr": "I worked as a front-end developer in AngularJS, Javascript, HTML5 and CSS3. Work developed under Scrum's Agile principles."
    }
  ]
}
