import './App.css';
// import Director from './Director.jpg';
import Proger from './Proger.jpg';

function Contacts() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Наши контакты</h1>
        <h3>Генеральный директор</h3>
        <h4>Чавкин Андрей Юрьевич</h4>
        {/* <img src={Director} className="App-logo" alt="Гинеральный директор" /> */}
        <h3>Главный специалист</h3>
        <h4>Еремин Дмитрий Олегович</h4>
        <img src={Proger} className="App-logo" alt="Главный специалист" />
        <h3>Клоун</h3>
        <h4>Сухачев Антон</h4>
      </header>
    </div>
  );
}

export default Contacts;