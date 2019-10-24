import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../task4/service.service';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
public A:[];
  constructor(public B:ServiceService) { }

  ngOnInit() {
    this.getB()
  }
getB(){
  this.B.getA().subscribe((B:any)=>{
    console.log(B)
    this.A = B.data.articleList
  })
}
}
