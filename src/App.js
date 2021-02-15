import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import QuizPage from "./UI/QuizPage";
import QuestionSection from './UI/Question';

function App() {
  return (
    <Router>
      <div>
        <div className="container">
          <Switch>
            <Route path="/" component={QuizPage} exact={true}/>
            <Route path="/quiz/:id" exact component={QuestionSection} />
          </Switch>
          {/* <QuizPage /> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
