import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const DetailScreen = ({ dataResponse }) => {
  const navigate = useNavigate();

  const { id } = useParams()
  const numero = parseInt(id)

  const item = dataResponse.data.find(item => item.id === numero)

  const handleReturnInicio = () => {
    navigate('/')
  }
  const handleReturnView = () => {
    navigate(-1)
  }

  return (
    <div className='container alert alert-primary mt-5 ' >
      <h1 className=''>Meal details</h1>

      <button className='btn btn-warning me-1 ' onClick={handleReturnView}>Return to Results</button>
      <button className='btn btn-danger   ' onClick={handleReturnInicio}>Return to Search</button>

      <h2 className='mt-3'>{item.title}</h2>
      <img className='d-block w-100' src={item.image} alt={item.title} />

      <h3 className='mt-3'>Other foods used:</h3>

      <div className='d-flex justify-content-center'>

        {
          item.missedIngredients.map(item => (
            <div className='me-1'>

              <p>{item.name}</p>
              <img src={item.image} alt={item.name} />

            </div>
          ))
        }

      </div>

    </div>
  )
}
