import React, {Component} from 'react';
import Header from "./common/header";
import { Provider } from 'react-redux';
import store from './store';
import { GlobalStyle } from './style';
import { GlobalIcon } from "./statics/iconfont/iconfont";

class App extends Component{
  render() {
    return (
        <div className="App">
            <GlobalStyle/>
            <GlobalIcon/>
            <Provider store={store}>
                <Header/>
            </Provider>
        </div>
    );
  }
}

export default App;
