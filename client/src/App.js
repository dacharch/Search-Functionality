import './App.css';

function App() {
  return (
    <div className="container">
      <div className='search-container'>
         <h2>Search your shoes </h2>
        <input className='search-bar' type="text" placeholder='Search Here' />
        <div className='btn'>
          <button>Search Result</button>
        </div>
        <div className='output'>

        </div>
      </div>
    </div>
  );
}

export default App;
