import React from 'react';
import './stylesheets/App.scss';
import AnimatedNav from './components/AnimatedNav';

function App() {
  // this will be the list of 5 names for the navbar in order
  const barLabels = ['Home', 'About', 'Contact', 'Blog', 'Support'];
  const colors = ['orange', 'blue', 'purple', 'green', 'red'];
  const navInfo = {};
  barLabels.forEach((key, i) => (navInfo[key] = colors[i]));
  return (
    <div>
      <AnimatedNav barLabels={barLabels} navInfo={navInfo} />
    </div>
  );
}

export default App;
