import './Main.scss'

function Main() {
  return (
    <main className="main">
      <div className='main__header'>
        <h1 className='main__title'>Список пользователей</h1>
        <input className='main__search' placeholder='Поиск...'></input>
      </div>
    </main>
  );
}
export default Main;
