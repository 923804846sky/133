import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service.service';
import { Router} from '@angular/router'
@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component implements OnInit {



  public aaa:any = {
    name:'',
    pwd:''
  }
  constructor(public ser:ServiceService,public rou:Router) { }

  ngOnInit() {
  }


  login(){
    this.ser.postData(this.aaa).subscribe((res:any)=>{
      console.log(res)
      if(res.code == 0){
        this.rou.navigate(['/task5'])
      }else{
        document.getElementById("msg").innerHTML = res.message;
      }
    })
  }

}
