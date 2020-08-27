import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import '../styles/App/App.css'
import Menu from './NavigationBar/Menu'
import Home from './HomePage/Home'
import Plants from './PlantsPage/Plants'
import Faq from './FaqPage/Faq'

const App = () => {
    return (
            <Router>
                    <Menu />
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/plants" component={Plants} />
                        <Route exact path="/faq" component={Faq} />
                    </Switch>
            </Router>
    )
}

export default App