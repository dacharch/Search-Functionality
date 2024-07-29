import './App.css';

function App() {
  return (
    <div className="container">
      <div className='search-container'>
         <h2>Search your Shoes </h2>
        <input className='search-bar' type="text" placeholder='Search Here' />
        <div className='btn'>
          <button>Search Result</button>
        </div>
      </div>
    </div>
  );
}

export default App;
