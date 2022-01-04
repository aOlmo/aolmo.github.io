import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'publications',
  templateUrl: './publications.component.html',
  styleUrls: ['../../stylesheets/styles.css', '../../stylesheets/pygment_trac.css', './publications.component.css', '../../font-awesome/css/all.min.css']
})
export class PublicationsComponent {
  // https://csvjson.com/csv2json
  publications = [
    {
      "Authors": "Niharika Jain*, Alberto Olmo*, Sailik Sengupta, Lydia Manikonda, Subbarao Kambhampati",
      "Title": "Implications of GANs Exacerbating Biases on Facial Data Augmentation and Snapchat Face Lenses",
      "Publication": "Artificial Intelligence Journal, 2021",
      "Download": "https://www.sciencedirect.com/science/article/abs/pii/S0004370221002034"
    },
    {
      "Authors": "Alberto Olmo, Sarath Sreedharan, Subbarao Kambhampati",
      "Title": "GPT3-to-plan: Extracting plans from text using GPT-3",
      "Publication": "ICAPS FinPlan and ICAPS KEPS, 2021",
      "Download": "https://arxiv.org/abs/2106.07131"
    },
    {
      "Authors": "Niharika Jain*, Alberto Olmo*, Sailik Sengupta, Lydia Manikonda, Subbarao Kambhampati",
      "Title": "Implications of GANs Exacerbating Biases on Facial Data Augmentation and Snapchat Face Lenses",
      "Publication": "ICLR SDG, 2021",
      "Download": "https://arxiv.org/pdf/2001.09528",
      "Poster": "https://aolmo.github.io/assets/files/imaganation_iclr_poster.pdf"
    },
    {
      "Authors": "Alberto Olmo, Sailik Sengupta, Subbarao Kambhampati",
      "Title": "Training Deep Neural Networks for Explicable (Mis)Classification",
      "Publication": "ICML UDL and ICML HILL, 2020",
      "Download": "https://arxiv.org/pdf/2006.14841",
      "Poster": "https://aolmo.github.io/assets/files/wlf_icml_poster.pdf"
    },
    {
      "Authors": "Sarath Sreedharan, Alberto Olmo, Aditya Prasad Mishra, Subbarao Kambhampati",
      "Title": "Model-free Model Reconciliation",
      "Publication": "IJCAI, 2019",
      "Download": "https://arxiv.org/pdf/1903.07198.pdf"
    },
    {
      "Authors": "Niharika Jain, Lydia Manikonda, Alberto Olmo, Sailik Sengupta, Subbarao Kambhampati",
      "Title": "Imagining an Engineer: On GAN-based Data Augmentation Perpetuating Biases",
      "Publication": "",
      "Download": "https://arxiv.org/pdf/1811.03751.pdf"
    },
    {
      "Authors": "Zahra Zahedi*, Alberto Olmo*, Tathagata Chakraborti, Sarath Sreedharan, Subbarao Kambhampati",
      "Title": "Towards Understanding User Preferences for Explanation Types in Model Reconciliation",
      "Publication": "International Conference on Human-Robot Interaction, 2019",
      "Download": "https://ieeexplore.ieee.org/abstract/document/8673097"
    },
    {
      "Authors": "Alberto Olmo",
      "Title": "Autoregressive Density Estimation in Latent Spaces",
      "Publication": "",
      "Download": "https://www.proquest.com/openview/2d590fc9f66d3ed64ef47b83e8f35a6a/1?pq-origsite=gscholar&cbl=18750"
    },
    {
      "Authors": "Alberto Olmo",
      "Title": "Extending MPI Parameters' Plugin",
      "Publication": "",
      "Download":"https://ddd.uab.cat/pub/tfg/2016/tfg_39376/Extending_PTFs_MPI_Parameters_plugin_-_Alberto_Olmo.pdf"
    }
  ]
}
