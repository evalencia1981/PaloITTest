import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'calcularNumero',
  templateUrl: './calcular-numero.component.html',
  styleUrls: ['./calcular-numero.component.css']
})
export class CalcularNumeroComponent implements OnInit {
  public calcularNumberForm: FormGroup;
  public numeroGanador : any; 
  numberPermitido = /\-?\d*\.?\d{1,2}/;
  
  constructor( ) { 
    this.calcularNumberForm = this.createForm(),   
    this.numeroGanador;  
   
    
  }

  ngOnInit() {    
    }
    get numberNew() { return this.calcularNumberForm.get('numberNew'); }
    

  createForm(){
      return new FormGroup({
        numberNew : new FormControl('',[Validators.required, Validators.maxLength(16), 
        Validators.minLength(14), Validators.pattern(this.numberPermitido)])
      });
       
    }
   
  onCalcularSuerte(): void {      
    function contarCaracteres(numberNew1: any) {
      let objresult;     
      objresult = [...numberNew1.replace(/\s/g, '')].reduce((obj, char) =>
       { obj[char] = obj[char] + 1 || 1; return obj;}, {} );
        console.log(objresult);
      let mayorRepetido = 0;
      let numeroSuerte =0
      for (let value in objresult) {       
        if(mayorRepetido < parseInt(objresult[value]))
           {                         
             mayorRepetido = parseInt(objresult[value]);
             numeroSuerte = parseInt(value);
           }  
      }   
        console.log(numeroSuerte, "suete")
      return numeroSuerte;
      }
      

    if (this.calcularNumberForm.valid) {
      console.log("buena suerte ");     
      this.numeroGanador =  contarCaracteres(this.numberNew?.value);
                
      this.calcularNumberForm.reset();
      }    
  }

}
