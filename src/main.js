import React from 'react';
import ReactDom from 'react-dom';
import App from '@/App.js'
import RootStore from './store/root'
import storesContext from './contexts/storesContexts'
import './style/main.css'

ReactDom.render(
	<storesContext.Provider  value={RootStore}>
		<App/>
	</storesContext.Provider>,
	document.querySelector('.app'),
);