import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import Home from './containers/home/Home';

function App() {
  return (
    <>
      <div className="content">
        <Menu />
        <div className="container mt-4">
          <Home />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
