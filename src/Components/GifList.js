import React from 'react';
import Gif from './Gif';
import NoGifs from './NoGifs'

const GifList = props => {

  const results = props.data;
  let gifs;
  if (results.length > 0) {
    gifs = results.map(gif => <Gif url={gif.images.fixed_height.url} key={gif.id}/>);
  } else {
    gifs = <NoGifs/>
  }

  return (
    <ul className="gif-list">
      <a
        style={{
        fontSize: ".7em",
        color: "#F16D7E",
        fontWeight: "bold",
        marginBottom: "10px"
      }}
        href="https://harmanpannu.com/">
        <span style={{
          color: "#2E333D"
        }}>By -
        </span>
        Harman Pannu</a>
      {gifs}
    </ul>
  );
}

export default GifList;
