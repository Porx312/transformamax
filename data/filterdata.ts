interface Filter {
  title: string
  filterString: string
}

const filterdata: Filter[] = [
  {
    title: 'Transformadores elevadores/reductores',
    filterString: 'transformador-elevador',
  },
  {
    title: 'Inversores',
    filterString: 'inversor',
  },
  {
    title: 'Controladores',
    filterString: 'controlador',
  },
]

export default filterdata
