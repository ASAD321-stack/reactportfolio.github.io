import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/nav';
import Header from './components/Header';
import About from './about';
import Skill from './skill';
import Services from './services';
import Mywork from './Mywork';
import Contact from './Contact';
import Footer from './footer';
function App() {
  return (
    <div className="App">
  <Router>
    <Nav/>
    <Switch>
    <Route  exact path="/Contact"  component={Contact}/>
    </Switch>
    <Route  path="/home"  component={Header}/>
    <Route  path="/home"  component={About}/>
    <Route  path="/home"  component={Skill}/>
    <Route  path="/home"  component={ Services }/>
    <Route  path="/home"  component={Mywork}/>
    <Route path="/home" component={Contact}/>
    <Route path="/home" component={Footer}/>





   
    
     
   
  
    
    
    </Router>
    </div>
  );
}

export default App;
