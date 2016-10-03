import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { Router, Route, Link , browserHistory} from 'react-router'
import App from "./components/app"
import store from "./store"
import routes from './routes'

const app = document.getElementById('app')


ReactDOM.render(<Provider store={store}>
   <Router  history={browserHistory}  routes=	{routes}>

   </Router>
</Provider>, app);