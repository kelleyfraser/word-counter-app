import AppHeader from './components/appHeader';
import InputForm from './components/inputForm';
import ResultList from './components/resultList';
import useCountState from './hooks/useCountState';
import './App.scss';

function App() {
  const saveInputData = ((text) => {
    const trimmedText = text.trim();
    if (trimmedText.length > 0) {
      countText(trimmedText);
    }
  });

  const {counts, countText, inputText, resetWordCounter} = useCountState([]);

  return (
    <div className="App">
      <AppHeader resetWordCounter={resetWordCounter} />
      <InputForm saveInputData={saveInputData}/>
      <ResultList text={inputText} counts={counts} countText={countText} />
    </div>
  );
}

export default App;
