import React from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Sorting from './Components/Sorting/Sorting';
import Queen from './Components/NQueens/Queen';
import GraphTraversal from './Components/GraphTraversal/GraphTraversal';
import Searching from './Components/Searching/Searching';
import BST from './Components/Tree/BST/BST';
import Home from './Components/Home/Home';
import Stack from './Components/Stack/Stack';
import Queue from './Components/Queue/Queue';
import About from './Components/About/About';
import Scheduling from './Components/Scheduling/Scheduling';

import './App.css';

function App() {
	return (
		<div className='App'>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path='/graphtraversal' component={GraphTraversal} />
					<Route exact path='/sort' component={Sorting} />
					<Route exact path='/searching' component={Searching} />
					<Route exact path='/scheduling' component={Scheduling} />
					<Route exact path='/nqueen' component={Queen} />
					<Route exact path='/tree' component={BST} />
					<Route exact path='/stack' component={Stack} />
					<Route exact path='/queue' component={Queue} />
					<Route exact path='/about' component={About} />
				</Switch>
				<Route exact path='/'>
					<Home/>
				</Route>
			</Router>
		</div>
	);
}

export default App;
