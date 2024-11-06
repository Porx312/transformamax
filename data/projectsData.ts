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
    title: 'Transformador Elevador/Reductor Cantonape 2000VA',
    description: `Este convertidor de voltaje se utiliza para cambiar el voltaje, convertir el voltaje de 220 voltios a 110 voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/61PwH5SGgkL._AC_SX679_.jpg',
    href: '/blog/reseñas/Reductor-Cantonape-2000VA',
    linkafiliados: 'https://amzn.to/3YUGERL',
    priceamazon: 89.99,
    resenas: 111,
    start: 4.2,
    category: 'transformador-elevador',
  },
  {
    title: 'Transformador Elevador/Reductor Yinleader 1500VA',
    description: `Este convertidor permite el uso de dispositivos americanos, japoneses y otros de 110-120 Voltios en Europa con un suministro de energía de 220-240 Voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/71oUEqPLTOL._SX522_.jpg',
    href: '/blog/reseñas/Reductor-Yinleader-1500VA',
    linkafiliados: 'https://amzn.to/4hEq3IW',
    priceamazon: 82.99,
    resenas: 273,
    start: 4.3,
    category: 'transformador-elevador',
  },
  {
    title: 'CREWORKS 5000W Transformador 220v a 110v  ',
    description: `COMPATIBILIDAD AMPLIA: Con 2 enchufes estadounidenses de 110 V, nuestro transformador de corriente de 220V a 110V alimenta y carga fácilmente una amplia gama de aparatos eléctricos y dispositivos electrónicos personales..
`,
    imgSrc: 'https://m.media-amazon.com/images/I/81RhANH7EDL._SX522_.jpg',
    href: '/blog/resenas/resenas',
    linkafiliados: 'https://amzn.to/3YFhkhj',
    priceamazon: 149.99,
    resenas: 51,
    start: 4.6,
    category: 'transformador-elevador',
  },
]

export default projectsData
