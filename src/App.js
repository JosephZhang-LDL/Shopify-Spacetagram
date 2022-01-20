import React, { useState, useEffect } from "react";
import moment from "moment";
import './App.scss';

import Card from "./Components/Card";
import Loading from "./Components/Loading";

// Chakra Styles
import { ChakraProvider, extendTheme, Wrap } from '@chakra-ui/react';

function App() {

  const [data, changeData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const twoWeeks = moment().subtract(13, "days").format("YYYY-MM-DD");
    fetch(`https://api.nasa.gov/planetary/apod?api_key=VrE43NaAjrJxdsmRCfmfLEM2vtCY0BW0pm3qsjxz&start_date=${twoWeeks}`)
      .then(res => res.json())
      .then(json => {
        changeData(json.reverse());
        setLoading(false);
        console.log(json);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="background">
        <nav className="navbar">
          <h2 className="intro">WELCOME TO</h2>
          <h1 className="logo">Spacetagram</h1>
        </nav>
        <main className="main-container">
          {loading ?
            <Loading />
            :
            <div className="wrap-container">
              {data.reverse().map(pic => <Card url={pic.url} explanation={pic.explanation} title={pic.title} date={pic.date} />)}
            </div>
          }
        </main>
        <footer>
          <h2 className="footer-text">Created by Joseph Zhang</h2>
        </footer>
      </div>
    </ChakraProvider>
  );
}

const theme = extendTheme({
  styles: {
    global: (props) => ({
      Heading: {
        fontFamily: 'Source Sans Pro',
      },
      Body: {
        fontFamily: "Source Sans Pro"
      }
    }),
  },
})

export default App;
