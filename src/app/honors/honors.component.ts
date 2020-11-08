import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'honors',
  templateUrl: './honors.component.html',
  styleUrls: ['./honors.component.css']
})
export class HonorsComponent {

  honors = [
    {
      "title": "Balsells Fellow",
      "dates": ["08/2016", "12/2017"],
      "place": "University of Colorado at Colorado Springs",
      "descr": "Scholarship that paid for my tuition and fees of my Computer Science Master's the University of Colorado at Colorado Springs as well as a stipend – only available for a very limited amount of students in Spain every year."
    },
    {
      "title": "Undergraduate Research Assistanship",
      "dates": ["07/2015", "06/2016"],
      "place": "Universitat Autònoma de Barcelona",
      "descr": "Undergraduate grant awarded by the Computer Architecture and Operating Systems department at Universitat Autònoma de Barcelona that paid for my contribution to the research projects Periscope and ELASTIC."
    },
    {
      "title": "Baccalaureate with Honors",
      "dates": ["06/2016", ""],
      "place": "IES La Romànica",
      "descr": "Received a grant that paid for all tuition and fees of the first year of my degree in Computer Science at Universitat Autònoma de Barcelona – Best student of 2012 in IES La Romànica"
    },
  ]
}
