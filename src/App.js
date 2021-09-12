import { Container } from '@material-ui/core';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import SimpleBottomNavigation from './components/mainnav/MainNav';
import Movies from './Pages/movies/Movies';
import Search from './Pages/search/Search';
import Series from './Pages/series/Series';
import Trending from './Pages/trending/Trending';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
    <div className="app">
    <Container>
      <Switch>
    <Route path='/' component={Trending} exact />
    <Route path='/movies' component={Movies} />
    <Route path='/series' component={Series} />
    <Route path='/search' component={Search} />

      </Switch>
    </Container>
    </div>

    <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
