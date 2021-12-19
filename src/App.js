import './App.css';
import Game from './components/Game';

function App() {

  const renderSquare = (i) => {
    console.log(i);
  }

  return (
    <Game status='?' renderSquare={renderSquare}/>
  );
}

export default App;
