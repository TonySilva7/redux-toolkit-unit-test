import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import App from './App';
import { store } from './app/store';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './styles/GlobalStyle';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ToastContainer autoClose={3000} className='toast-container' />
			<GlobalStyle />
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

serviceWorker.unregister();
