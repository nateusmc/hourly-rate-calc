import React from 'react';
import ReactDOM from 'react-dom';
import RateCalculator from './components/RateCalculator';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <RateCalculator />,
  document.getElementById('root')
);
registerServiceWorker();