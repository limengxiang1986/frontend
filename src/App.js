import { PureComponent } from "react";
import Footer from "./components/app-footer";
import Body from "./components/body";
import Headers from "./components/app-header";
import {Route} from 'react-router-dom';
import routes from './router';
import { HashRouter } from "react-router-dom";
import {renderRoutes} from 'react-router-config';
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

class App extends PureComponent{
  render(){
    return (
      <BrowserRouter>
        <Headers />
          {renderRoutes(routes)}
        <Footer />
      </BrowserRouter>
    )
  }
}

export default App
