// 1. Import *useState* and *useEffect*
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // Detta är vårt javascript-land mao bara js eller ts-kod här.
  // 2. Create our *dogImage* variable as well as the *setDogImage* function via useState
  // We´re setting the default value of dogImage to null, so that while we wait for the
  // fetch to complete, we dont attemt to render the image.

  let [dogImage, setDogImage] = useState(null);

  // 3. Create useEffect function. This handle our side effect, in this case fetching data from api
  useEffect(() => {
    // fetching one dogImage
    // fetch("https://dog.ceo/api/breeds/image/random")
    fetch("https://dog.ceo/api/breeds/image/random/6")
      .then((Response) => Response.json())
      // 4. Setting *dogImage to the url that we received from the responseabove
      .then((data) => setDogImage(data.message));
  }, []);
  // End js/ts-land
  return (
    // Detta är vårt jsx-land. Här blandar vi html och js.

    <div className="App">
      {/* 5. Using *dogImage as* the *src* for our image  */}

      {/* This is for one dogImage */
      /* dogImage && <img src={dogImage}></img> */}

      {dogImage &&
        dogImage.map((dog) => (
          <img width={"200px"} height={"200px"} src={dog}></img>
        ))}
    </div>
    // End jsx-land
  );
}

export default App;
