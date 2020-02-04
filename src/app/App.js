import React from 'react';
import RouteCongif from './RouteConfig'
import Provider from 'react-redux/es/components/Provider';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <RouteCongif />    
    </Provider>
  );
}

export default App;
