import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent {


  divisionForm=new FormGroup({

    'num1':new FormControl("", Validators.required),
    'num2':new FormControl("",Validators.required)
  })


  get num1(){
    return this.divisionForm.get('num1')
  }

  get num2(){
    return this.divisionForm.get('num2')
  }
  // result:number=0
  // n1:number=0
  // n2:number=0


  performDiv(){


  
      console.log(this.divisionForm.value);
    
    
  }


}
