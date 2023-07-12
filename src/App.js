
import './App.css';
import receipts from './models/receipts';
import Receipts from './components/Receipts';
const state = {
  receipts
}
function App() {
  return (
    <div className="App">
      <Receipts ticketInfo={state.receipts[0]}/>
      <Receipts ticketInfo={state.receipts[1]}/>
      <Receipts ticketInfo={state.receipts[2]}/>

      
    </div>
  );
}

export default App;
