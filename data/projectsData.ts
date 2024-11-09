interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  linkafiliados?: string
  priceamazon: number
  resenas: number
  start: number
  category: string
}

const projectsData: Project[] = [
  {
    title: 'Transformador Elevador/Reductor Yinleader 1000W (220V / 110V)',
    description: `Este convertidor permite el uso de dispositivos americanos, japoneses y otros de 110-120 Voltios en Europa con un suministro de energía de 220-240 Voltios.`,
    imgSrc: 'https://m.media-amazon.com/images/I/71-MH3Po2oL._AC_SX679_.jpg',
    href: '/blog/revision/Reductor-Yinleader-1000',
    linkafiliados: 'https://amzn.to/4fgpN1o',
    priceamazon: 76.99,
    resenas: 172,
    start: 4.4,
    category: 'transformador-elevador',
  },
  {
    title: 'Transformador Elevador/Reductor Yinleader 1500VA (220V / 110V)',
    description: `Este convertidor permite el uso de dispositivos americanos, japoneses y otros de 110-120 Voltios en Europa con un suministro de energía de 220-240 Voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/71oUEqPLTOL._SX522_.jpg',
    href: '/blog/revision/Reductor-Yinleader-1500VA',
    linkafiliados: 'https://amzn.to/4hEq3IW',
    priceamazon: 82.99,
    resenas: 273,
    start: 4.3,
    category: 'transformador-elevador',
  },
  {
    title: 'Transformador Elevador/Reductor Cantonape 2000VA  (220V / 110V)',
    description: `Este convertidor de voltaje se utiliza para cambiar el voltaje, convertir el voltaje de 220 voltios a 110 voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/61PwH5SGgkL._AC_SX679_.jpg',
    href: '/blog/revision/Reductor-Cantonape-2000VA',
    linkafiliados: 'https://amzn.to/3YUGERL',
    priceamazon: 89.99,
    resenas: 111,
    start: 4.2,
    category: 'transformador-elevador',
  },
  {
    title: 'Transformador Elevador/Reductor Cantonape 3000VA  (220V / 110V)',
    description: `Este convertidor de voltaje se utiliza para cambiar el voltaje, convertir el voltaje de 220 voltios a 110 voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/61ihNKQMoNL._AC_SX679_.jpg',
    href: '/blog/revision/transformador-elevador-cantonape-3000va',
    linkafiliados: 'https://amzn.to/3UKq5Ft',
    priceamazon: 109,
    resenas: 29,
    start: 4.1,
    category: 'transformador-elevador',
  },
  {
    title: 'trasnformador elevador CREWORKS 5000W (220v a 110v)  ',
    description: `COMPATIBILIDAD AMPLIA: Con 2 enchufes estadounidenses de 110 V, nuestro transformador de corriente de 220V a 110V alimenta y carga fácilmente una amplia gama de aparatos eléctricos y dispositivos electrónicos personales..
`,
    imgSrc: 'https://m.media-amazon.com/images/I/81RhANH7EDL._SX522_.jpg',
    href: '/blog/revision/Transformador-creworks-5000w-220v-a-110v',
    linkafiliados: 'https://amzn.to/3YFhkhj',
    priceamazon: 149.99,
    resenas: 51,
    start: 4.6,
    category: 'transformador-elevador',
  },
  {
    title: 'Cantonape Inversor De Corriente 300W (5v / 2.4A) ',
    description: `Inversor 12V a 220V-240V：Con 1 toma de enchufe EU y 2 puertos de USB (5v / 2.4A y 5v / 1A), ideal para carga movíles, tabletas, portátil, cámara digital, ventilador, etc
`,
    imgSrc: 'https://m.media-amazon.com/images/I/71hVG2FxNUL._AC_SX679_.jpg',
    href: '/blog/revision/inversor-de-corriente-cantonape-300w',
    linkafiliados: 'https://amzn.to/4enk0pp',
    priceamazon: 29.99,
    resenas: 222,
    start: 4.0,
    category: 'inversor',
  },
  {
    title: 'Inversor De Corriente 600W  (12v a 220v) ',
    description: `onda sinusoidal modificada Inversor 12V a 220V o 230V: con 1 toma de enchufe EU y 2 puertos de USB(5V / 2.4A), ideal para carga movíles, tabletas, portátil, cámara digital, ventilador, etc.
`,
    imgSrc: 'https://m.media-amazon.com/images/I/61w0Vi+-pJL._AC_SX679_.jpg',
    href: '/blog/revision/Transformador-creworks-5000w-220v-a-110v',
    linkafiliados: 'https://amzn.to/3Om2981',
    priceamazon: 39.99,
    resenas: 479,
    start: 4.1,
    category: 'inversor',
  },
  {
    title: 'Green Cell 300W/600W ( 12V a 220V/230V)',
    description: `Con este inversor, puede controlar dispositivos con el nivel de 220V con la ayuda de una batería que tiene un nivel de 12V y una potencia continua de 300W con una potencia máxima corta de 600W. El cable de alimentación de una conexión de encendedor de cigarrillos normal Es máximo de 150W.
`,
    imgSrc: 'https://m.media-amazon.com/images/I/81iLP2P2QyL._AC_SX679_.jpg',
    href: '/blog/revision/green-cell-300w-600w',
    linkafiliados: 'https://amzn.to/48HCcZD',
    priceamazon: 31.95,
    resenas: 7.538,
    start: 4.0,
    category: 'inversor',
  },
  {
    title: 'BRIMETI Transformador 220V a 24V 100W 4,16A LED Driver',
    description: `transformador 220v a 12v la carcasa de aluminio ultrafina con orificios de disipador de calor en forma de panal facilita la disipación de calor y puede prolongar la vida útil de la fuente de alimentación. 
`,
    imgSrc: 'https://m.media-amazon.com/images/I/51JqTmhQr0L._SX522_.jpg',
    href: '/blog/revision/Reseña-del-BRIMETI-Transformador-220V-a-24V-100W-LED-Driver',
    linkafiliados: 'https://amzn.to/3ACERat',
    priceamazon: 16.99,
    resenas: 485,
    start: 4.4,
    category: 'controlador',
  },
]

export default projectsData
