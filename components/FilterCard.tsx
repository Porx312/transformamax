'use client'
import projectsData from '@/data/projectsData'
import React, { useState } from 'react'
import Card from './Card'
import filterdata from '@/data/filterdata'

const FilterCard = () => {
  const [filter, setFilter] = useState('transformador-elevador')
  return (
    <>
      <div className="m-2 flex flex-wrap gap-2 p-2">
        {filterdata.map((d, index) => (
          <button
            key={index}
            className="flex h-12 cursor-pointer items-center justify-center  rounded-md border border-gray-300 p-2 font-bold text-black transition-all hover:bg-orange-400"
            onClick={() => setFilter(d.filterString)}
          >
            {d.title}
          </button>
        ))}
      </div>
      <div className="-m-4 flex flex-wrap justify-center">
        {projectsData
          .filter((d) => d.category === filter)
          .map((d) => (
            <Card
              key={d.title}
              title={d.title}
              description={d.description}
              imgSrc={d.imgSrc}
              href={d.href}
              linkafiliados={d.linkafiliados}
              priceamazon={d.priceamazon}
              start={d.start}
              resenas={d.resenas}
            />
          ))}
      </div>
    </>
  )
}
export default FilterCard
