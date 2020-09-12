import React from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import '../styles/App/app.scss'
import Menu from './NavigationBar/Menu'
import Home from './HomePage/Home'
import PlantsContainer from './PlantsPage/PlantsContainer'
import Faq from './FaqPage/Faq'
import Footer from './Footer'

const App = () => {
    return (
            <Router>
                    <Menu />
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route exact path="/home" component={Home} />
                        <Route exact path="/plants" component={PlantsContainer} />
                        <Route exact path="/faq" component={Faq} />
                    </Switch>
                    <Footer />
            </Router>
    )
}

export default App