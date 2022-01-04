import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'honors',
  templateUrl: './honors.component.html',
  styleUrls: ['../../stylesheets/styles.css', '../../stylesheets/pygment_trac.css', './honors.component.css']
})
export class HonorsComponent {

  honors = [
    {
      "title": "<a href='https://eas.uccs.edu/academic/balsells_graduate'>Balsells Fellowship</a>",
      "dates": ["Aug 2016", "Dec 2017"],
      "place": "University of Colorado at Colorado Springs",
      "descr": "Fellowship that covered in full the tuition of my Computer Science Master's degree at the University of Colorado at Colorado Springs as well as a stipend – only available for a very limited amount of students in Spain every year."
    },
    {
      "title": "Undergraduate Research Assistantship",
      "dates": ["Jul 2015", "Jun 2016"],
      "place": "Universitat Autònoma de Barcelona",
      "descr": "Undergraduate grant awarded by the Computer Architecture and Operating Systems department at Universitat Autònoma de Barcelona that paid for my contribution to the European research projects Periscope and ELASTIC."
    },
    {
      "title": "Baccalaureate with Honors",
      "dates": ["Jun 2012", ""],
      "place": "IES La Romànica",
      "descr": "Undergraduate grant that paid for the first year of my degree in Computer Science at Universitat Autònoma de Barcelona – Best student of 2012 of IES La Romànica"
    },
  ]
}
