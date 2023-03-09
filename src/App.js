import './App.css';
import TodosContainer from './components/containers/TodoContainer'
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <TodosContainer/>
        <TodoFormContainer/>
        {/* Filter Options contain Filter Container */}
        <Filteroptions/>

      </header>
    </div>
  );
}

export default App;
