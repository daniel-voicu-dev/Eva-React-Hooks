import React, { lazy, Suspense } from 'react';
// import logo from './logo.svg';
// import './App.css';

const Header = React.lazy(() => import('./modules/Header'));

function App() {
  return (
    <div className="App">     
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>   
    </div>
  );
}

export default App;
