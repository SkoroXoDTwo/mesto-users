import './App.scss';
import Header from '../Header/Header';
import Main from '../Main/Main';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { useSelector } from 'react-redux';

function App() {
  const { error } = useSelector((state) => state.users);

  return (
    <div className="app">
      <div className='app__container'>
        <Header />
        <Main />
        {error && <ErrorMessage error={error}/>}
      </div>
    </div>
  );
}

export default App;
