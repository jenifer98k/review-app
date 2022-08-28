//import {FaGithubSquare} from 'react-icons/fa'
import './App.css';
import Review from './Review';


function App() {
 
    return (
      <main className='container text-center align-center' >
      <div className="title">
        <h2>Our Reviews</h2>
        <div className="underline"></div>
      </div>
      <Review/>
    </main>
  );
}

export default App;
