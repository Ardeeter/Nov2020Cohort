import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import reducer from './reducers/counterReducer'
import App from './App';
import ViewCount from './components/ViewCount'
import BaseLayout from './components/layout/BaseLayout'


let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) //reducer

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <BaseLayout>
          <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/count' component={ViewCount}/>
            
          </Switch>
        </BaseLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

