import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

export const ViewScreen = ({ response, setDataResponse }) => {
  const navigate = useNavigate();
  const { data, loading } = useFetch(response);

  useEffect(() => {
    setDataResponse(data)
  }, [data])

  const handleReturn = () => {
    navigate('/')
  }

  return (
    <div className="container alert alert-primary mt-5 ">
      <h1 className='alert' >You have 4 options: </h1>
      <button className='btn btn-primary btn-lg ' onClick={handleReturn}>Regresar</button>
      {
        loading
          ? (<div className='mt-2'>Loading...</div>)
          : (
            <div className='container mt-3'>
              <ul>
                {data.data.map(item => (
                  <li className='row' key={item.id}>
                    <h2 className='alert alert-warning mt-4'>{item.title}</h2>
                    <img className='d-block' src={item.image} alt={item.title} />
                    <hr />
                    <Link className='btn btn-outline-primary' to={`/items/${item.id}`} > See more </Link>
                  </li>
                ))}
              </ul>
            </div>
          )
      }
    </div>
  )
}
