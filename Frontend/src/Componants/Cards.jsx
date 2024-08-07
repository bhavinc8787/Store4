import React from 'react'

function Cards({ item }) {
    
    return (
        <>
    <div>
        <div className="card bg-base-100 w-85 shadow-xl mt-4 ml-3 hover:scale-105 duration-200 dark:text-slate-300 dark:bg-slate-900 dark:border">
    <figure >
      <img
        src={item.img_link}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {item.title}
        <div className="badge badge-secondary">{item.category}</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">{item.price}</div>
        <div className="badge badge-outline cursor-pointer">Buy Now</div>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Cards