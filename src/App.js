
import React from 'react'
import { Route,Switch,Redirect } from 'react-router-dom'
import Home from './component.js/Home'
import About from './component.js/About'
import Navbar from './component.js/Navbar'
import Error from './component.js/Error'
import Post from './component.js/Post'


export default function App() {
  let isLogged=true;
  console.log('app===>')
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/post/:id" component={Post}/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/Login">{isLogged?<Redirect to='/About'/>:<About/>}</Route>
        {/* <Route exact path="/about" render={()=><About page_name="seema"/>}/> */}
        <Route component={Error}/>
      </Switch>
    </div>
  )
}
