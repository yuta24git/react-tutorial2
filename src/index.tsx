import React from 'react'; // Reactをインポート
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // Appコンポーネントをインポート
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* Appコンポーネントをレンダリング */}
  </React.StrictMode>,
  document.getElementById('root')
);