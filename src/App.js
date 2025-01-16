import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';


import { Provider } from 'react-redux';

import './App.css';

import {store} from './redux';
import PageContainer from './View/Components/PageContainer';


function App(props) {

	return (
<Provider store={store}>
	<Router>
		<PageContainer/>
	</Router>
</Provider>
	);
}

export default App;
