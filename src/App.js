import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

import "./App.css";

const defaultHistory = createBrowserHistory();

function Header() {
  return (
    <div class="banner">
      <h1 class="banner-title">&#128571; Cats and Dogs &#128021;</h1>
      <h4>Random pics of cats and dogs</h4>
    </div>
  );
}

function Home({ history }) {
  const [input, setInput] = useState("");

  const handleOnClick = () => {
    history.push(`/cat/${input}`);
  };

  return (
    <div>
      <Header />
      <div class="home">
        <input
          placeholder="Insert a greeting"
          value={input}
          onInput={(e) => setInput(e.target.value)}
        />
        <button onClick={handleOnClick}>Greet Me</button>
      </div>

      <div class="home">
        <div class="content">
          <div class="cat">
            <img width="400px" src="https://cataas.com/cat/says/hello" />
          </div>
          <div class="dog">
            <img
              width="400px"
              src="https://random.dog/91474781-c254-4397-b658-d19b7f0a4f5b.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" render={() => <Home history={history} />} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
