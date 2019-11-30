import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg",
    rating: 5.0
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
    "https://t1.daumcdn.net/liveboard/dailylife/222d88e5c7dc496c8e8a8a56c3452e52.JPG",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/220px-Dolsot-bibimbap.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: "Doncasu",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2018/10/21/775ee21fad1d0bbb84b663c5bd4dbeab1.jpg",
    rating: 4.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
    "http://recipe1.ezmember.co.kr/cache/recipe/2016/04/08/1d26c0444e724bca8ed271b24da0057a1.jpg",
    rating: 4.7
  }
]

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
    {foodILike.map(dish => (
      <Food
        key={dish.id}
        name={dish.name}
        picture={dish.image}
        rating={dish.rating}
      />
     ))}
    </div>
  );
}

export default App;
