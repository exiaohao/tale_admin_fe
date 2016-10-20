import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'

render((
    <Router history={withExampleBasename(browserHistory, __dirname)}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/about" component={About}/>
            <Route path="users" component={Users}>
                <IndexRoute component={UsersIndex}/>
                <Route path=":id" component={User}/>
            </Route>
        </Route>
    </Router>
), document.getElementById('example'))