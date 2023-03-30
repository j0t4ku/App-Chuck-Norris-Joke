import React, { useState } from 'react';
import { useEffect } from 'react';
import { getRandomJoke } from '../../services/axiosServices.js';
import CardJoke from '../pure/CardJoke';

const ChuckJokes = () => {
  const [joke, setJoke] = useState(null);
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    obtainJoke();
  }, []);

  const obtainJoke = () => {
    getRandomJoke()
      .then((r) => {
        if (r.status == 200) {
          console.log(r);
          setJoke(r.data);
          setStatus(false);
        }
      })
      .catch((err) => {
        alert('Error in get user: ', err);
      });
  };

  const updateLikes = (type) => {
    if (type == 'like' && status === false) {
      setLike(like + 1);
      setStatus(true);
    } else if (type == 'dislike' && status === false) {
      setDisLike(disLike + 1);
      setStatus(true);
    }else if(type == 'like' && status === true){
        setLike(like + 1);
        setDisLike(disLike - 1);
    }else if (type == 'dislike' && status === true){
        setLike(like - 1);
        setDisLike(disLike + 1);
    }
  };

  return (
    <div>
      <h1>Chuck Norris Joke</h1>
      {joke != null ? (
        <CardJoke
          joke={joke}
          like={like}
          disLike={disLike}
          updateLikes={updateLikes}
          obtainJoke={obtainJoke}
        />
      ) : (
        <h3>Generete Joke</h3>
      )}
    </div>
  );
};

export default ChuckJokes;
