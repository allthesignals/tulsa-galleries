import { useEffect, useState } from 'react';
import { csv } from 'd3-fetch';
import Header from './Header';
import Map from './Map';
import List from './List'
import './App.css';

const GALLERIES_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRV476aaXFgAknoXAMO7nnbSbm0oIRdggzeRw7LUSv7QwMAQHrtM2rC3bRJmCOaOK_IGWA2wcfpj3eK/pub?gid=0&single=true&output=csv';

function App() {
  const [galleries, setGalleries] = useState([]);

  // https://betterprogramming.pub/stop-lying-to-react-about-missing-dependencies-10612e9aeeda
  // https://overreacted.io/a-complete-guide-to-useeffect/
  useEffect(() => {
    const fetchData = async () => {
      const galleries = await csv(GALLERIES_URL, (d) => {
        return {
          ...d,
          Featured: d.Featured === 'TRUE' ? true : false,
          Longitude: +d.Longitude,
          Latitude: +d.Latitude,
        };
      });

      setGalleries(galleries);
    };

    fetchData();
  }, []);

  return (
    <div className='flex flex-col h-full'>
      <Header/>

      <div className='flex flex-col sm:flex-row h-full'>
        <Map
          className='basis-2/3'
          data={galleries}
        />
        <List
          className='basis-1/3 overflow-y-auto'
          data={galleries}
        />
      </div>
    </div>
  );
}

export default App;
