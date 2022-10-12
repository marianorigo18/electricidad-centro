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
//Normalizados
import abrazaderas from "../assets/normalizados/abrazaderas.jpg"
import accesoriosPHiloDeGuardia from "../assets/normalizados/accesorios-p-hilo-de-guardia.jpg"
import aisladoresDePorcelana from "../assets/normalizados/aisladores-de-porcelana.jpg"
import aisladoresPolimericos from "../assets/normalizados/aisladores-polimericos.jpg"
import anclajes from "../assets/normalizados/anclajes.jpg"
import arandelas from "../assets/normalizados/arandelas.jpg"
import atadurasYAmarres from "../assets/normalizados/ataduras-y-amarres.jpg"
import brazos from "../assets/normalizados/brazos.jpg"
import bulones from "../assets/normalizados/bulones.jpg"
import cables from "../assets/normalizados/cables.jpg"
import chapas from "../assets/normalizados/crusetas.jpg"
import elementosDeCadena from "../assets/normalizados/elementos-de-cadena.jpg"
import guardacabos from "../assets/normalizados/guardacabo.jpg"
import jabalinas from "../assets/normalizados/jabalinas.jpg"
import mensulasYMorsas from "../assets/normalizados/mensulas-y-morsas.jpg"
import morcetosConectoresYGrampas from "../assets/normalizados/morcetos-conectores-y-grampas.jpg"
import ojales from "../assets/normalizados/ojales.jpg"
import pernos from "../assets/normalizados/pernos.jpg"
import proteccionesElectricas from "../assets/normalizados/protecciones-electricas.jpg"
import seccionadores from "../assets/normalizados/seccionadores.jpg"
import tensores from "../assets/normalizados/tensores.jpg"
import tillas from "../assets/normalizados/tillas.jpg"
import varios from "../assets/normalizados/varios.jpg"
import yugos from "../assets/normalizados/yugos.jpg"
//Instrumentos
import buscapoloInductivo from "../assets/instrumentos/buscapolo-inductivo.jpg"
import buscapolo from "../assets/instrumentos/buscapolo.jpg"
import multimetroTwo from "../assets/instrumentos/multimetro-two.jpg"
import multimetro from "../assets/instrumentos/multimetro.jpg"
import pinzaAmperometrica from "../assets/instrumentos/pinza-amperometrica.jpg"
import puntaPrueba from "../assets/instrumentos/punta-prueba.jpg"
//aereo
import pkd14 from "../assets/aereo/pkd-14.jpg"
import pkd16 from "../assets/aereo/pkd-16.jpg"
import pkd31 from "../assets/aereo/pkd-31.jpg"
import pkd20 from "../assets/aereo/pkd20.jpg"
import pkr20 from "../assets/aereo/pkr20.jpg"
import pks10cf from "../assets/aereo/pks-10cf.jpg"
import preensambladoTwo from "../assets/aereo/preensamblado.jpg"


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

export const normalizadosT = [
  {
    id: 1,
    img: abrazaderas,
    title: "abrazaderas"
  },
  {
    id: 2,
    img: accesoriosPHiloDeGuardia,
    title: "accesorios para hilo de guardia"
  },
  {
    id: 3,
    img: aisladoresDePorcelana,
    title: "aisladores de porcelana"
  },
  {
    id: 4,
    img: aisladoresPolimericos,
    title: "aisladores polimericos"
  },
  {
    id: 5,
    img: anclajes,
    title: "anclajes"
  },
  {
    id: 6,
    img: arandelas,
    title: "arandelas"
  },
  {
    id: 7,
    img: atadurasYAmarres,
    title: "ataduras y amarres"
  },
  {
    id: 8,
    img: brazos,
    title: "brazos"
  },
  {
    id: 9,
    img: bulones,
    title: "bulones"
  },
  {
    id: 10,
    img: cables,
    title: "cables"
  },
  {
    id: 11,
    img: chapas,
    title: "chapas"
  },
  {
    id: 12,
    img: elementosDeCadena,
    title: "elementos de cadena"
  },
  {
    id: 13,
    img: guardacabos,
    title: "guardacabos"
  },
  {
    id: 14,
    img: jabalinas,
    title: "jabalinas"
  },
  {
    id: 15,
    img: mensulasYMorsas,
    title: "mensulas y morsas"
  },
  {
    id: 16,
    img: morcetosConectoresYGrampas,
    title: "morcetos, conectores y grampas"
  },
  {
    id: 17,
    img: ojales,
    title: "ojales"
  },
  {
    id: 18,
    img: pernos,
    title: "pernos"
  },
  {
    id: 19,
    img: proteccionesElectricas,
    title: "protecciones electricas"
  },
  {
    id: 20,
    img: seccionadores,
    title: "seccionadores"
  },
  {
    id: 21,
    img: tensores,
    title: "tensores"
  },
  {
    id: 22,
    img: tillas,
    title: "tillas"
  },
  {
    id: 23,
    img: varios,
    title: "varios"
  },
  {
    id: 24,
    img: yugos,
    title: "yugos"
  },
]

export const instrumentosT = [
  {
    id: 1,
    img: buscapoloInductivo,
    title: "buscapolo inductivo"
  },
  {
    id: 2,
    img: buscapolo,
    title: "buscapolo"
  },
  {
    id: 3,
    img: multimetroTwo,
    title: "multimetro"
  },
  {
    id: 4,
    img: multimetro,
    title: "multimetro"
  },
  {
    id: 5,
    img: pinzaAmperometrica,
    title: "pinza amperometrica"
  },
  {
    id: 6,
    img: puntaPrueba,
    title: "punta de prueba"
  },
]

export const aereoT = [
  {
    id: 1,
    img: pkd14,
    title: "pkd-14"
  },
  {
    id: 2,
    img: pkd16,
    title: "pkd-16"
  },
  {
    id: 3,
    img: pkd31,
    title: "pkd-31"
  },
  {
    id: 4,
    img: pkd20,
    title: "pkd-20"
  },
  {
    id: 5,
    img: pkr20,
    title: "pkr-20"
  },
  {
    id: 6,
    img: pks10cf,
    title: "pks-10 cf"
  },
  {
    id: 7,
    img: preensambladoTwo,
    title: "preensamblado"
  },
] 