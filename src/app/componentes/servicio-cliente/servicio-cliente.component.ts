import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-servicio-cliente',
  templateUrl: './servicio-cliente.component.html',
  styleUrls: ['./servicio-cliente.component.scss']
})
export class ServicioClienteComponent implements OnInit {
  form:FormGroup;
  formulario:boolean = true;

  constructor(private formbuilder:FormBuilder){
    this.form = this.formbuilder.group({
      nombre:['',[Validators.required]],
      telefono:['',[Validators.required, Validators.pattern(/[0-9]/), Validators.minLength(9), Validators.maxLength(9)]],
      email:['',[Validators.required, Validators.email]],
      dirigido:['',[Validators.required]],
      mensaje:['',[Validators.required]]
    })
  }
  
  mostrarFormulario(){
    this.formulario = false;
  }

  ngOnInit(): void {
  }
}
