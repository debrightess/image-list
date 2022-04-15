import React from 'react';

const ImageList = ({ images }) => {
  const result = images.map((image) => {
    return <img src={image.webformatURL} alt={image.type} />;
  });
  return <div>{result}</div>;
};

export default ImageList;
