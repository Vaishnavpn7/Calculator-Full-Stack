import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";


@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent {


  multiForm=new FormGroup({

    'num1':new FormControl("", Validators.required),
    'num2':new FormControl("", Validators.required),
  })

  get num1(){
    return this.multiForm.get('num1')

  }

  get num2(){
    return this.multiForm.get('num2')
  }

  // result:number=0
  // n1:number=0
  // n2:number=0


  performMulti(){

    console.log(this.multiForm.value);
    
    
    
  }


}
