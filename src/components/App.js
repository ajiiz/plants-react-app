import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import '../styles/App/App.css'
import Menu from './NavigationBar/Menu'
import About from './HomePage/About'
import Plants from './PlantsPage/Plants'
import Faq from './FaqPage/Faq'

const App = () => {
    return (
        <header>
            <Router>
                <nav>
                    <Menu />
                </nav>
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="/home" component={About} />
                        <Route exact path="/plants" component={Plants} />
                        <Route exact path="/faq" component={Faq} />
                    </Switch>
            </Router>
        </header>
    )
}

export default App