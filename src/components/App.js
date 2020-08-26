import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import '../styles/App/App.css'
import Menu from './NavigationBar/Menu'
import About from './HomePage/About'
import Plants from './PlantsPage/Plants'

const App = () => {
    return (
        <header>
            <Router>
                <nav>
                    <Menu />
                </nav>
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/plants" component={Plants} />
                    </Switch>
            </Router>
        </header>
    )
}

export default App