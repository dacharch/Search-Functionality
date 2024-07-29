import {useState} from 'react' ;
import axios from 'axios' ;
import './App.css';

function App() {
  const [result,setResult] = useState([]) ;


  const handleKeyUp = async  (e)=>{
       const response = await axios.get(`http://localhost:4040/shoe?search=${e}`)
       setResult(response.data)  ;
  }

  return (
    <div className="container">
      <div className='search-container'>
         <h2>Search your shoes </h2>
        <input 
          onKeyPress={(e)=>handleKeyUp(e.target.value)}
          
          className='search-bar' type="text" placeholder='Search Here' />
        <div className='btn'>
          <button>Search Result</button>
        </div>
        <div className='output'>
            {
               result.map((item,index)=>(
                 <div className='result' key={index}>{item.brand}</div>
               ))
            }
        </div>
      </div>
    </div>
  );
}

export default App;
