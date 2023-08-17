import { useState } from 'react'

const cars = [
  {
    name: 'Tesla Model Y',
    sku: 'TY001',
    type: 'electric',
    img: 'https://hips.hearstapps.com/hmg-prod/images/2022-tesla-model-y-1639687270.jpg?crop=0.854xw:0.855xh;0.0897xw,0.0620xh&resize=640:*'
  },
  {
    name: 'Tesla Model 3',
    sku: 'TY002',
    type: 'electric',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdc6MvjgRXzN5ARfX_oD1Cxtq65UtHlaJP5g&usqp=CAU'
  },
  {
    name: 'Livewire One',
    sku: 'HD001',
    type: '2 wheels',
    img: 'https://www.bikesrepublic.com/wp-content/uploads/2021/06/LiveWire-One.jpg'
  },
  {
    name: 'Softail Standard',
    sku: 'HD002',
    type: '2 wheels',
    img: 'https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-softail-standard/2023-softail-standard-010/360/2023-softail-standard-010-motorcycle-03.jpg?impolicy=myresize&rw=1600'
  },
  {
    name: 'Chevrolet Camaro ZL1',
    sku: 'CV005',
    type: 'sports',
    img: 'https://images.drive.com.au/caradvice/image/private/c_fill,f_auto,g_auto,h_675,q_auto:eco,w_1200/v1/3c78259e5c5c8fd886db8945b11de4f8'
  },
  {
    name: 'McLaren Artura',
    sku: 'ML006',
    type: 'sports',
    img: 'https://hips.hearstapps.com/hmg-prod/images/mclarenarturaflux-2-1613486108.jpg?crop=0.677xw:0.508xh;0.0357xw,0.163xh&resize=980:*'
  },
]

export default function Carlist() {
  const [carsList, setCarsList] = useState(cars);
  function setCarType(type) {
    const filteredCars = cars.filter((car) => car.type === type)
    setCarsList(filteredCars)
  }
  return (
  <div className='row'>
    <div className='col-xs-12'>
      <div className='buttons-container'>
        <button onClick={() => setCarType('electric')} type='button' className='btn btn-primary'>Electric</button>
        <button onClick={() => setCarType('2 wheels')} type='button' className='btn btn-primary'>2 Wheels</button>
        <button onClick={() => setCarType('sports')} type='button' className='btn btn-primary'>Sport</button>
      </div>
      { carsList.map((car) => {
        return (
          <div key={car.sku} className='car-container'>
            <div className='pull-left'>
              <h4 className='list-group-item-heading'>{ car.name }</h4>
              <p className='list-group-item-text'>Description: { car.name }</p>
              <p className='list-group-item-text'>Type: { car.type }</p>
            </div>
            <span className='pull-right'>
              <img src={car.img} alt={car.name} className='img-responsive car-img' />
            </span>
            <hr />
          </div>
        )
      })}
    </div>
  </div>
  )
}