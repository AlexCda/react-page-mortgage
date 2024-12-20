import { useState } from 'react';
import MortgageForm from './components/MortgageForm/MortgageForm'
import MortgageNoResult from './components/MortgageNoResult/MortgageNoResult';
import MortgageResults from './components/MortgageResults/MortgageResults';
import './App.css';

function App() {
  const [isShowResults, setIsShowResults] = useState(false);
  const [isShowNoResult, setIsShowNoResult] = useState(true);
  const [mortgageData, setMorgageData] = useState(null);
  const onGetData = (data) =>{
    setMorgageData(data);
    setIsShowResults(true);
    setIsShowNoResult(false);
  }
const onClear = () =>{
  setIsShowResults(false);
  setIsShowNoResult(true);
}
  return (
    <div className="App container">
      <MortgageForm onGetData={onGetData} onClear={onClear}/>
      {
        isShowResults && <MortgageResults data={mortgageData} />
      }
      {
        isShowNoResult && <MortgageNoResult/>
      }
    </div>
  );
}

export default App;
