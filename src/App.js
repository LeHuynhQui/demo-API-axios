import './App.css';
import Demo from './component/Demo';
import axios from 'axios';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Router,
  NavLink,
  useHistory,
} from "react-router-dom";
import Them from './component/Them';
import CapNhat from './component/CapNhat';

function App() {


  const [movies, setMovies] = useState(null)

  const getMovie = () => {
    axios.get("https://61029c2e79ed6800174821f1.mockapi.io/api/axios")
    .then(result => {
      setMovies(result.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  useEffect(() => {
    getMovie()
  }, [])

  const handleXoa =  (id) => {
    axios.delete(`https://61029c2e79ed6800174821f1.mockapi.io/api/axios/${id}`)
    .then(result => {
      getMovie()

    })
    .catch(error => {
      console.log(error)
    })
  } 


  const renderMovie = () => {
    return movies.map((movie, index) => {
      return (
        <div key={index}>
          <p>{movie.name}</p>
          <button>SUa</button>
          <button onClick= {() => handleXoa(movie.id)}>Xoa</button>
          {/* <img src={movie.hinhAnh} alt=""/> */}
        </div>
      )
    })
  }


  

  return (
    <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Demo />
            {movies && renderMovie()}
            <NavLink to="/them">Them</NavLink>
            {/* <p onClick={hanleClick}>THem</p> */}
            {/* <button>Them trang</button> */}

            <CapNhat />

          </Route>


          <Route path="/them">
            <Them getMovie ={getMovie}/>
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
