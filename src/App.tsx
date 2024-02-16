import React from 'react';
import Game from './components/Game'; // Gameコンポーネントをインポート
import "./App.css";

function App() {
  return (
    <div className="App">
      <Game /> {/* Gameコンポーネントをレンダリング */}
    </div>
  );
}

export default App;