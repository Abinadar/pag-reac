import React from 'react'
import Carf from './carf.js'
import imagen1 from '../assets/mano.jpg'
import imagen2 from '../assets/mano2.jpg'
import imagen3 from '../assets/pantalla.jpg'

const carts=[ 
  {
    id:1,
    title:'curso',
    image: imagen1,
    desc:'curso basico java'
  },
  {
    id:2,
    title:'curso',
    image: imagen2,
    desc:'curso basico java'
  },
  {
    id:3,
    title:'curso',
    image: imagen3,
    desc:'curso basico java'
  }
]

export default function Carts() {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                carts.map(c => (
                    <div className='col-md-4' key={carts.id}>
                        <Carf
                        key={c.id}
                        id={c.id}
                        title={c.title}
                        image={c.image}
                        desc={c.desc}
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}