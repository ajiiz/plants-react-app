import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../styles/App/App.css'
import Menu from './NavigationBar/Menu'
import About from './About'
import Plants from './Plants'

const App = () => {
    return (
        <Router>
            <main>
                <Menu />
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/plants" component={Plants} />
                </Switch>
            </main>
        </Router>
    )
}

export default App