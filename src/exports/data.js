//Logo
import logo from "../assets/logo/logo-ele-centro-three.png"
//Toppics
import industria from "../assets/topics/industria.jpg";
import iluminacion from "../assets/topics/iluminacion.jpg";
import conductores from "../assets/topics/conductoresfour.jpg";
import terminales from "../assets/topics/terminales.jpg";
import normalizados from "../assets/topics/normalizados.jpg";
import instrumentos from "../assets/topics/instrumentos.jpg";
import aereo from "../assets/topics/aereo.jpg";
import conjuntos from "../assets/topics/conjuntos.jpg";
import emergencia from "../assets/topics/emergencia.jpg";
import herramientas from "../assets/topics/herramientas.jpg";
import morceteria from "../assets/topics/morceteria.jpg";
//industria
import contactores from "../assets/industria/contactores.jpg"
import motores from "../assets/industria/motores.jpg"
import variadores from "../assets/industria/variadores.jpg"
import relevos from "../assets/industria/relevos.jpg"
import arranqueSuave from "../assets/industria/arranque-suave.jpg"
import termomagneticas from "../assets/industria/termomagneticas.jpg"
import diferenciales from "../assets/industria/diferenciales.jpg"
//Iluminacion
import vintage from "../assets/iluminacion/lamparas-vintage.jpg"
import faroles from "../assets/iluminacion/faroles.jpg"
import bidireccionales from "../assets/iluminacion/bidireccionales.jpg"
import plafones from "../assets/iluminacion/plafones.jpg"
import colgantes from "../assets/iluminacion/colgantes.jpg"
//Conductores
import taller from "../assets/conductores/taller.jpg"
import subterraneo from "../assets/conductores/subterraneo.jpg"
import retenax from "../assets/conductores/retenax.jpg"
import preensamblado from "../assets/conductores/preensamblado.jpg"
import utp from "../assets/conductores/utp.jpg"
import mallado from "../assets/conductores/mallado.jpg"
import soldadura from "../assets/conductores/soldadura.jpg"
import cuDesnudo from "../assets/conductores/desnudo-cu.jpg"
import unipolares from "../assets/conductores/unipolares.jpg"
//Terminales
import terminalCu from "../assets/terminales/terminal-cobre-estañado.jpg"
import tubulares from "../assets/terminales/tubulares.jpg"
import preaislados from "../assets/terminales/preaislados.jpg"
import bimetalicoForjado from "../assets/terminales/bimetalico-forjado.jpg"
import bimetalico from "../assets/terminales/bimetalico.jpg"
import terminalAl from "../assets/terminales/terminal-aluminio.jpg"


export const logos = {id: 1, img: logo, alt: "logo de electricidad centro"}


export const topic = [
  {
    id: 1,
    img: industria,
    phrase: "optimiza tu industria con los mejores componentes",
    title: "linea industrial",
    categories: "contactores, motores, variadores, relevos, arranque suave, termomagneticas, diferenciales, etc."
  },
  {
    id: 2,
    img: iluminacion,
    phrase: "encontra todo para iluminar tu hogar",
    title: "iluminacion",
    categories: "lamparas, faroles, bidireccionales, plafones, colgantes, etc."

  },
  {
    id: 3,
    img: conductores,
    phrase: "conecta",
    title: "conductores",
    categories: "taller, subterraneo, retenax, preensamblado, utp, mallado, soldadura, cu-desnudo, unipolares, etc."
  },
  {
    id: 4,
    img: terminales,
    phrase: "terminales de compresion",
    title: "terminales",
    categories: "cu-estañado, punteras tubulares, preaislado-ojal, bimetalico-forjado, bimetalico, aluminio, etc."
  },
  {
    id: 5,
    img: normalizados,
    phrase: "materiles electricos de norma",
    title: "materiales normalizados",
    categories: "tillas, bulones, tensores, aisladores, etc."
  },  
  {
    id: 6,
    img: instrumentos,
    phrase: "testea todas tu conecciones",
    title: "instrumentos de medicion",
    categories: "multimetros, pinzas amperometricas, puntas de prueba, etc."
  },  
  {
    id: 7,
    img: aereo,
    phrase: "desplasa tus conecciones por los aires",
    title: "linea aerea",
    categories: "tensores, perchas, derivadores, suspenciones, abrazadare, cables, etc."
  },  
  {
    id: 8,
    img: conjuntos,
    phrase: "descubri toda las lineas de conjuntos armados que temos para vos.",
    title: "conjuntos armados",
    categories: "cambre bauhaus, cambre xxii, cambre xxi, jeluz verona, sica life, etc."
  },  
  {
    id: 9,
    img: emergencia,
    phrase: "no te quedaras sin iluminacion",
    title: "luces de emergencia",
    categories: "lamparas autonomas, luces de emergencia, etc."
  },  
  {
    id: 10,
    img: herramientas,
    phrase: "herramientas de seleccion",
    title: "herramientas",
    categories: "pinzas, alicates, prensaterminales, cinta metrica, destornilladores, etc."
  },  
  {
    id: 11,
    img: morceteria,
    phrase: "deriva tus conecciones",
    title: "morceteria",
    categories: "morcetos, derivadores, etc."
  },  
];

export const industriaT = [
  {
    id: 1,
    img: contactores,
    title: "contactores"
  },
  {
    id: 2,
    img: motores,
    title: "motores"
  },
  {
    id: 3,
    img: variadores,
    title: "variadores"
  },
  {
    id: 4,
    img: relevos,
    title: "relevos"
  },
  {
    id: 5,
    img: arranqueSuave,
    title: "arranque-suave"
  },
  {
    id: 6,
    img: termomagneticas,
    title: "termomagneticas"
  },
  {
    id: 7,
    img: diferenciales,
    title: "diferenciales"
  },
]

export const iluminacionT = [
  {
    id: 1,
    img: vintage,
    title: "lampara-vintage"
  },
  {
    id: 2,
    img: faroles,
    title: "faroles"
  },
  {
    id: 3,
    img: bidireccionales,
    title: "bidireccionales"
  },
  {
    id: 4,
    img: plafones,
    title: "plafones"
  },
  {
    id: 5,
    img: colgantes,
    title: "colgantes"
  }
]

export const conductoresT = [
  {
    id: 1,
    img: taller,
    title: "taller"
  },
  {
    id: 2,
    img: subterraneo,
    title: "subterraneo"
  },
  {
    id: 3,
    img: retenax,
    title: "retenax"
  },
  {
    id: 4,
    img: preensamblado,
    title: "preensamblado"
  },
  {
    id: 5,
    img: utp,
    title: "utp"
  },
  {
    id: 6,
    img: mallado,
    title: "mallado"
  },
  {
    id: 7,
    img: soldadura,
    title: "soldadura"
  },
  {
    id: 8,
    img: cuDesnudo,
    title: "cuDesnudo"
  },
  {
    id: 9,
    img: unipolares,
    title: "unipolares"
  },
]

export const terminalesT = [
  {
    id: 1,
    img: terminalCu,
    title: "terminal-cu"
  },
  {
    id: 2,
    img: tubulares,
    title: "punteras tubulares"
  },
  {
    id: 3,
    img: preaislados,
    title: "terminales preaislados"
  },
  {
    id: 4,
    img: bimetalicoForjado,
    title: "bimetalico forjado"
  },
  {
    id: 5,
    img: bimetalico,
    title: "bimetalico"
  },
  {
    id: 6,
    img: terminalAl,
    title: "aluminio"
  },
]