import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-scss';
  pictures =[
    {img:"https://www.chinesefortunecalendar.com/PC/Angel/Samples/Trump/Trump-200.jpg"},
    {img:'https://www.opensecrets.org/assets/candidates/trump-3cd2028ba4b67c833ff9950437ad8ff435eed853fd5bcf522e182f6738fc0799.jpg'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUlXWvYRVNo-vVrdVRR-Yq7tpwWJc_6FN_hkE2tZs0P5IR_tbfTg'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV45MqPsFIhgx_AKdodBy-BeCHBDwvYAjsaSuffpOcO7CNNBHYYA'},
    {img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8yY9zXUVwI4YkiJb2-Dv1Kcwg6mxyrFiWPzx16yS-wEQiwU65WQ'},
  ];
}
