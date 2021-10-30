export interface Noticias {
    id:number;
    idCategoria:number;
    titulo:string;
    autor:string;
    fecha:string;
    imagen:string;
    texto:string;
    destacado:boolean;
}

export let ListaNoticias:Array<Noticias>=[
{   
    id:1,
    idCategoria:1,
    titulo:"El juego de Calamar se convierte en la serie más visitada de Netflix",
    autor:"autor noticia calamar",
    fecha:Date().toString(),
    imagen:"https://as01.epimg.net/meristation/imagenes/2021/09/28/videos/1632823754_596212_1632823812_portada_normal.jpg",
    texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit ad consequat, fusce turpis hendrerit accumsan porta bibendum sagittis erat nullam netus, inceptos malesuada feugiat id imperdiet faucibus ultrices dapibus. Sapien in velit sociis aptent habitasse quam convallis volutpat, cras eu facilisis quis augue quisque dapibus, ullamcorper sagittis ad odio condimentum auctor aliquam. Semper vehicula facilisis tempor parturient non dictum metus nulla, netus curae convallis ultrices proin ad pharetra aenean iaculis, in odio molestie auctor natoque augue cum.",
    destacado: true
},
{   
    id:2,
    idCategoria:2,
    titulo:"Murío el rinoceronte más viejo",
    autor:"autor noticia rinoceronte",
    fecha:Date().toString(),
    imagen:"https://cr00.epimg.net/radio/imagenes/2018/03/20/tendencias/1521548412_114433_1521548486_noticia_normal.jpg",
    texto: 'Cum lobortis est ullamcorper interdum varius ultrices vel blandit taciti mattis, dapibus purus a ultricies maecenas ligula proin vitae natoque curabitur, feugiat lacinia fusce leo sed platea iaculis nostra metus. Venenatis urna arcu dictumst tempor nullam massa fringilla tellus pellentesque ornare vulputate eros dui aliquet malesuada accumsan luctus, vestibulum nisi est eu facilisi ridiculus orci tristique blandit egestas potenti rutrum porta primis natoque. Conubia egestas lacus mattis nulla taciti facilisi, libero tellus arcu semper leo consequat nunc, orci ullamcorper aenean diam nibh.',
    destacado: true
},
{   
    id:3,
    idCategoria:3,
    titulo:"Ciclismo - El regreso de Chris Froome",
    autor:"autor noticia ciclismo",
    fecha:Date().toString(),
    imagen:"https://www.naiz.eus/media/asset_publics/resources/000/673/493/article_main_landscape/froome.jpg",
    texto: "Lorem ipsum dolor sit amet consectetur adipiscing elit ad consequat, fusce turpis hendrerit accumsan porta bibendum sagittis erat nullam netus, inceptos malesuada feugiat id imperdiet faucibus ultrices dapibus. Sapien in velit sociis aptent habitasse quam convallis volutpat, cras eu facilisis quis augue quisque dapibus, ullamcorper sagittis ad odio condimentum auctor aliquam.",
    destacado: true
},
{   
    id:4,
    idCategoria:4,
    titulo:"Algunas causas de la baja en el precio del Bitcoin",
    autor:"autor noticia bitcoin",
    fecha:Date().toString(),
    imagen:"https://cdn-pro.elsalvador.com/wp-content/uploads/2021/06/bitcoin-perdida-de-valor.jpg",
    texto: "Semper vehicula facilisis tempor parturient non dictum metus nulla, netus curae convallis ultrices proin ad pharetra aenean iaculis, in odio molestie auctor natoque augue cum.",
    destacado: false
},
{   
    id:5,
    idCategoria:5,
    titulo:"Aumentan los casos de coronavirus",
    autor:"autor noticia cornavirus",
    fecha:Date().toString(),
    imagen:"https://cdnuploads.aa.com.tr/uploads/Contents/2020/04/12/thumbs_b_c_2d0cf76dc9bf1a0d20bf5f041ecf9f36.jpg?v=201039",
    texto: "Cum lobortis est ullamcorper interdum varius ultrices vel blandit taciti mattis, dapibus purus a ultricies maecenas ligula proin vitae natoque curabitur, feugiat lacinia fusce leo sed platea iaculis nostra metus. Venenatis urna arcu dictumst tempor nullam massa fringilla tellus pellentesque ornare vulputate eros dui aliquet malesuada accumsan luctus, vestibulum nisi est eu facilisi ridiculus orci tristique blandit egestas potenti rutrum porta primis natoque.",
    destacado: false
},
{   
    id:6,
    idCategoria:6,
    titulo:"Los 5 mejores inventos de Elon Musk",
    autor:"autor noticia Elon Musk",
    fecha:Date().toString(),
    imagen:"https://d500.epimg.net/cincodias/imagenes/2020/08/05/motor/1596615148_874204_1596615190_noticia_normal.jpg",
    texto: "consequat nunc, orci ullamcorper aenean diam nibh.",
    destacado: false
}
];