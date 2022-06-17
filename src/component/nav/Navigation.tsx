import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { routes } from "./constant";
import Drawer from "./Drawer";
import { authUser } from "../../store/slice/Auth";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { userName, password, clientId, appGrant, secret } from "../../config";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const { isLoading, status, user, error } = useAppSelector(
    (state) => state.auth
  );
  // console.log(user);
  // localStorage.setItem("token",user?.access_token)
  const token = localStorage.getItem("token")

  const getUser = () => {
    const formEncoded = new URLSearchParams({
      username: userName,
      password: password,
      client_id: clientId,
      grant_type: appGrant,
      client_secret: secret,
    });
    dispatch(authUser(formEncoded)).then((res)=>{
      localStorage.setItem("token",res.payload.access_token)
    }).catch(err => {
      console.log(err)
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Drawer routes={routes} isOpen={isOpen} toggleDrawer={toggleDrawer} />
      <Navbar routes={routes} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navigation;
