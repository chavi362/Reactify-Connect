import React, { useEffect } from 'react'
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user } = React.useContext(UserContext);
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!usert)
  //     navigate('/login')
  // }), [user]
  return (
    <div>
"chavi"
    </div>
  )
}

export default Home
