import React from 'react';
import './App.css';
import ComponentA from './component/ComponentA';
// import ReducerHook from './component/ReducerHook';
// import EffectHook from './component/EffectHook';
import StateHook from './component/StateHook';
export const UserContext = React.createContext()


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hooks Example
        </p>
        <div>
          <StateHook />
          {/* <EffectHook />
          <ReducerHook /> */}
          <UserContext.Provider value={{ firstName: 'Test-Name', lastName: 'Test-LastName' }}>
            <ComponentA />
          </UserContext.Provider>
        </div>
      </header>
    </div>
  );
}

export default App;
