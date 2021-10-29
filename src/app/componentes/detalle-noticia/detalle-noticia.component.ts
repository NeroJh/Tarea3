import { Component, OnInit } from '@angular/core';
import {ListaNoticias, Noticias} from '../../interfaces/noticia';
import {ListaCategorias, Categorias} from '../../interfaces/categorias';
import {ActivatedRoute,Route} from '@angular/router';

@Component({
  selector: 'app-detalle-noticia',
  templateUrl: './detalle-noticia.component.html',
  styleUrls: ['./detalle-noticia.component.scss']
})
export class DetalleNoticiaComponent implements OnInit {
  ListaNoticias=ListaNoticias;
  noticia:any;
  categoria:any;

  constructor(private ruta:ActivatedRoute) { }
    
   

  ngOnInit(): void {
    let id:number=0;
    this.ruta.params.subscribe(datos=>{
      id=datos["id"];
    })
    this.noticia=ListaNoticias.find(objeto=>objeto.id==id);
    this.categoria=ListaCategorias.find(objeto=>objeto.id==this.noticia.idCategoria);

    console.log(this.categoria);
  }

}