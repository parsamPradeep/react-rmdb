import React, {useState} from 'react';

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from './config';
import NoImg from '../Images/no-image.svg';

const Home = () => {
  const [state, setSate] = useState();
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);

  return <div>Home page</div>;
};

export default Home;
