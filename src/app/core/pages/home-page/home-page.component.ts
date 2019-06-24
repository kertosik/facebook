import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allPosts= [ 
    {
    id: "jk254624",
    body: 'Mam fajnego psa!',
    author: {
      name: 'Ciocia Krysia'
    },
    images: [
      "https://picsum.photos/id/1/200/50"
    ]
  },

  {
    id: "jk252524",
    body: 'Mam fajnego kota!',
    author: {
      name: 'Wujek Robert'
    },
    images: [
      "https://picsum.photos/200/50"
    ]
  }
]

  constructor() { }

  ngOnInit() {
  }

}
