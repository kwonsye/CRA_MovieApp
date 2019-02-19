import React, {Fragment} from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "Routes/Home";
import TVShow from "Routes/TVShow";
import Search from "Routes/Search";
import Header from "./Header";

export default () => (
    <Router>
        <Fragment>
            <Header>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/tvshow" exact component={TVShow}></Route>
                    <Route path="/search" exact component={Search}></Route>
                    <Redirect from="*" to="/"></Redirect>
                </Switch>
            </Header>
        </Fragment>
    </Router>
)