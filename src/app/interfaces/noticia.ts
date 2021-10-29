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
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://as01.epimg.net/meristation/imagenes/2021/09/28/videos/1632823754_596212_1632823812_portada_normal.jpg",
    texto: "texto de noticia 1",
    destacado: true
},
{   
    id:2,
    idCategoria:2,
    titulo:"Murío el rinoceronte más viejo",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://cr00.epimg.net/radio/imagenes/2018/03/20/tendencias/1521548412_114433_1521548486_noticia_normal.jpg",
    texto: 'texto de noticia 2',
    destacado: true
},
{   
    id:3,
    idCategoria:3,
    titulo:"Ciclismo - El regreso de Chris Froome",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://www.naiz.eus/media/asset_publics/resources/000/673/493/article_main_landscape/froome.jpg",
    texto: "texto de noticia 1",
    destacado: true
},
{   
    id:4,
    idCategoria:4,
    titulo:"Noticia 4",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://www.naiz.eus/media/asset_publics/resources/000/673/493/article_main_landscape/froome.jpg",
    texto: "texto de noticia 1",
    destacado: false
},
{   
    id:5,
    idCategoria:5,
    titulo:"Noticia 5",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://www.naiz.eus/media/asset_publics/resources/000/673/493/article_main_landscape/froome.jpg",
    texto: "texto de noticia 1",
    destacado: false
},
{   
    id:6,
    idCategoria:6,
    titulo:"Noticia 6",
    autor:"autor noticia 1",
    fecha:Date().toString(),
    imagen:"https://www.naiz.eus/media/asset_publics/resources/000/673/493/article_main_landscape/froome.jpg",
    texto: "texto de noticia 1",
    destacado: false
}
];