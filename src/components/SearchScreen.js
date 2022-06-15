import React from 'react'
import { useForm } from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

export const SearchScreen = ({ setResponse }) => {
  //*useFetch para peticion
  //*useForm para formulario
  //*useRouter para rutas
  //*separa en componentes(busqueda, visualizacion y detalle) y funciones

  const navigate = useNavigate();

  const [{ searchText }, handleInputChange, reset] = useForm({
    searchText: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse(searchText)
    navigate(`/items?search=${searchText}`);
    reset();
  }

  return (
    <div className=" container alert alert-primary mt-5 ">

      <header className=" container-fluid mt-5 ">
        <h1  className=' container-fluid'>Browser of Food by Ingredientes</h1>
      </header>

      <form className="form-group form-control-lg mt-3" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchText}
          name="searchText"
          onChange={handleInputChange}
          placeholder="Search for food by your favorite ingredient"
          className=" form-control form-control-lg"
        />
      </form>

      <br />
      <hr />
    </div>
  )
}
