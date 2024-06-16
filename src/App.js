import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Topview from './Components/Topview';
import Centreview from './Components/Centreview';
import Bodyview from './Components/Bodyview';
import Bottomview from './Components/Bottomview';
import Waveview from './Components/Waveview';
import Functionview from './Components/Functionview';
import Cardview from './Components/Cardview';
import Footerview from './Components/Footerview';

function App() {
  return (
    <div>
      <Topview />
      <Centreview />
      <Bodyview />
      <Bottomview />
      <Waveview />
      <Functionview />
      <Cardview />
      <Footerview />
    </div>
  )
}

export default App
