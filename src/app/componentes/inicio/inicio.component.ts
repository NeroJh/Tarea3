import { Component, Input, OnInit } from '@angular/core';
import {ListaCategorias, Categorias} from '../../interfaces/categorias';
import { ListaNoticias } from 'src/app/interfaces/noticia';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

ListaNoticias=ListaNoticias;
noticia:any;
//categorias:Categorias[]=ListaCategorias;
//categoria:any;

  constructor() {}

  ngOnInit(): void {
    //this.noticia=ListaNoticias.find(objeto=>objeto.id==id);
    //this.categoria=this.categorias.find(cate => this.noticia.idCategoria == cate.id)
  }

}
