import React, { useState,useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

function App() {
  const [init,setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) =>{
      if(user){
        setUserObj(user);
      }
      setInit(true);
    })

  },[]);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={Boolean(userObj)} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
      <footer>&copy; {new Date().getFullYear()} Bwitter</footer>
    </>
  );
}

export default App;
