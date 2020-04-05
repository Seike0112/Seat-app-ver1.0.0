import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SeatList from './components/SeatList'

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={SeatList} />
        </Switch>
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <h1>SEAT APP</h1>
//     </div>
//   );
// }

export default App;
