import React, { useState,useEffect } from "react";
import AppRouter from "components/Router";
import { authService } from "myFirebase";

function App() {
  const [init,setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  useEffect(() => {
    authService.onAuthStateChanged((user) =>{
      if(user){
        setIsLoggedIn(true);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    })

  },[]);
  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..." }
      <footer>&copy; {new Date().getFullYear()} Bwitter</footer>
    </>
  );
}

export default App;
