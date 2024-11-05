interface Project {
  title: string;
  description: string;
  href?: string;
  imgSrc?: string;
  linkafiliados?: string;
  priceamazon: number
  resenas: number
  start: number
}

const projectsData: Project[] = [
  {
    title: 'Cantonape 2000VA Convertidor de Voltaje 220V',
    description: `Este convertidor de voltaje se utiliza para cambiar el voltaje, convertir el voltaje de 220 voltios a 110 voltios...`,
    imgSrc: 'https://m.media-amazon.com/images/I/61PwH5SGgkL._AC_SX679_.jpg',
    href: '/blog/the-time-machine',
    linkafiliados: 'https://amzn.to/3YUGERL',
    priceamazon: 200,
    resenas: 25,
    start: 3.5
  },
]

export default projectsData;
