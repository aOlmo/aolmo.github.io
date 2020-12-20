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
      "Authors": "Alberto Olmo, Sailik Sengupta, Subbarao Kambhampati",
      "Title": "Not all Failure Modes are Created Equal: Training Deep Neural Networks for Explicable (Mis) Classification",
      "Publication": "arXiv preprint arXiv:2006.14841",
      "download": "https://arxiv.org/pdf/2006.14841"
    },
    {
      "Authors": "Niharika Jain, Alberto Olmo, Sailik Sengupta, Lydia Manikonda, Subbarao Kambhampati",
      "Title": "Imperfect imaganation: Implications of gans exacerbating biases on facial data augmentation and snapchat selfie lenses",
      "Publication": "arXiv preprint arXiv:2001.09528",
      "download": "https://arxiv.org/pdf/2001.09528"
    },
    {
      "Authors": "Sarath Sreedharan, Alberto Olmo, Aditya Prasad Mishra, Subbarao Kambhampati",
      "Title": "Model-free model reconciliation",
      "Publication": "arXiv preprint arXiv:1903.07198",
      "download": "https://arxiv.org/pdf/1903.07198.pdf"
    },
    {
      "Authors": "Niharika Jain, Lydia Manikonda, Alberto Olmo, Sailik Sengupta, Subbarao Kambhampati",
      "Title": "Imagining an engineer: On GAN-based data augmentation perpetuating biases",
      "Publication": "arXiv preprint arXiv:1811.03751",
      "download": "https://arxiv.org/pdf/1811.03751.pdf"
    },
    {
      "Authors": "Zahra Zahedi, Alberto Olmo, Tathagata Chakraborti, Sarath Sreedharan, Subbarao Kambhampati",
      "Title": "Towards understanding user preferences for explanation types in model reconciliation",
      "Publication": "2019 14th ACM/IEEE International Conference on Human-Robot Interaction (HRI)",
      "download": "https://ieeexplore.ieee.org/abstract/document/8673097"
    },
    {
      "Authors": "Alberto Olmo",
      "Title": "Autoregressive Density Estimation in Latent Spaces",
      "Publication": "",
      "download": "https://mountainscholar.org/bitstream/handle/10976/166754/OlmoHernxE1ndez_uccs_0892N_10323.pdf?sequence=1"
    },
    {
      "Authors": "Alberto Olmo",
      "Title": "Extensió del Plugin de Sintonització de Paràmetres MPI de l'eina PTF",
      "Publication": "",
      "download":"https://ddd.uab.cat/pub/tfg/2016/tfg_39376/Extending_PTFs_MPI_Parameters_plugin_-_Alberto_Olmo.pdf"
      
    }
  ]
}
