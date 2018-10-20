import React, { Component } from 'react'
import './css/App.css'

import IndexText from './templates/index'

import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import prodReducer from './reducers/prod-reducer'
import userReducer from './reducers/user-reducer'

const allReducers = combineReducers({ products: prodReducer, user: userReducer });

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
  )

const store = createStore(
                          allReducers, 
                          { products: [{name: 'iphone'}], user: 'abdul'},
                          allStoreEnhancers
                          )
  
const updateUserActions = {
  type: 'updateUser',
  payload: {
    user: 'nizam'
  }
}


// console.log(store.getState())

store.dispatch(updateUserActions)

// console.log('updated: ',store.getState())

class App extends Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <IndexText randomProps="whatever" />
        </div>
      </Provider>
    );
  }
}

export default App;
