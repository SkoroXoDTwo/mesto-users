import { useEffect } from 'react';
import './App.scss';
import api from '../../utils/Api'
import Header from '../Header/Header';

function App() {
  useEffect(() => {
    api.getInitialUsersInfo().then((res) => {
      console.log(res.filter(user => user.name !== "Jacques Cousteau"));
    })
  }, [])

  return (
    <div className="app">
      <div className='app__container'>
        <Header />
      </div>
    </div>
  );
}

export default App;
