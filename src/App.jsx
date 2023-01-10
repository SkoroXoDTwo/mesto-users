import { useEffect } from 'react';
import './App.scss';
import api from './utils/Api'

function App() {
  useEffect(() => {
    api.getInitialUsersInfo().then((res) => {
      console.log(res.filter(user => user.name !== "Jacques Cousteau"));
    })
  }, [])

  return (
    <div className="app">
      <div className='app__container'>

      </div>
    </div>
  );
}

export default App;
