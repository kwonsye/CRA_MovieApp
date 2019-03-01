import React, { Component, Fragment } from 'react';
import Router from "./Router";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router />
        <GlobalStyles /> {/*전체 스타일 적용 */}
      </Fragment>
    );
  }
}

export default App;
