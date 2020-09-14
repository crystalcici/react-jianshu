import React, {Component} from 'react';
import Header from "./common/header";
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store';
import { GlobalStyle } from './style';
import { GlobalIcon } from "./statics/iconfont/iconfont";
import Home from "./pages/home";
import Detail from "./pages/detail";

class App extends Component{
  render() {
    return (
        <div className="App">
            <GlobalStyle/>
            <GlobalIcon/>
            <Provider store={store}>
                <div>
                    <Header/>
                    <BrowserRouter>
                        <Route path='/' exact component={Home} />
                        <Route path='/detail' exact component={Detail} />
                    </BrowserRouter>
                </div>
            </Provider>
        </div>
    );
  }
}

export default App;
