import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Search } from "./components/Search";

function App() {
  const [img, setImg] = useState([]);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImg(data.hits);
      })
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="bg">
      <div className="container mx-auto">
        <Search settxt={(text) => setTerm(text)} />
        <div className="row">
          {img.map((img) => (
            <div className="col-lg-4 col-xl-4 col-md-4 col-sm-12">
              <Card key={img.id} image={img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
