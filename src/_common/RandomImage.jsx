import React, { useState, useEffect } from 'react';

function RandomImage() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const delay = imageUrl ? 2000 : 0;

    new Promise(resolve => setTimeout(resolve, delay)).then(() => {
      fetch("https://api.api-ninjas.com/v1/animals?name={cheetah}", {
        method: 'GET',
        headers: {
          'x-api-key': 'TVoX/SC4KpnWeTAtBXcBNA==d2LaIpqHOv5l7XlF'
        },
      })
        .then(res => res.json())
        .then(data => setImageUrl(data.message))
        .catch(err => console.log("Problemino!", err))
    });
  }, [imageUrl]);

  return(
    <div>
      <img src={imageUrl} alt="Random Scooby!" />
    </div>
  );
}

export default RandomImage;