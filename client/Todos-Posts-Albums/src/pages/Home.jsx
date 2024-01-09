import React, { useEffect } from 'react'
import { UserContext } from '../App';

const Home = () => {
  const  user = React.useContext(UserContext);
  console.log(user);
  return (
    <div>
      {/* {user.username} */}
      chavi
    </div>
  )
}
export default Home
