import './Main.scss'
import Users from '../Users/Users'
import { useSelector, useDispatch } from 'react-redux';
import { editFilter } from '../../store/filter/filterActions';

function Main() {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter);

  const changeInput = (e) => {
    dispatch(editFilter(e.target.value));
  }

  return (
    <main className="main">
      <div className='main__header'>
        <h1 className='main__title'>Список пользователей</h1>
        <input className='main__search' value={filter} onChange={changeInput} placeholder='Поиск...' />
      </div>

      <Users />
    </main>
  );
}
export default Main;
