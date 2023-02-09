import React, { useState , useEffect} from "react";
import "./menu.style.scss";
import Profile from "./profile";
import Bank from "./Bank";
import Credit from "./credit";
import Insurance from "./insurance";
import Qualifaction from "./qualifaction";
import Business from "./Business";
import Farm from "./farm";
import Yeild from "./yeild";
import Comm from "./comminucation";
import { Text } from "./components";
import { toast } from "react-toastify";


import { initializeApp } from "firebase/app";
import { getAuth, RecaptchaVerifier } from "firebase/auth";






const Menu = () => {




  const [selected, setSelected] = useState(4);

  const nextCompHandler = () => {
    setSelected(selected + 1);
  };
  const prevCompHandler = () => {
    setSelected(selected - 1);
  };

  const data = [
    {
      title: "Personal Information",
      component: <Profile prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Comminucation details",
      component: <Comm prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Farm locations and details",
      component: <Farm prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Yeild information",
      component: <Yeild prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Bank details",
      component: <Bank prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Credit",
      component: <Credit prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Insaurance",
      component: <Insurance prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Quailfication",
      component: <Qualifaction prev={prevCompHandler} next={nextCompHandler} />,
    },
    {
      title: "Business",
      component: <Business prev={prevCompHandler} next={nextCompHandler} />,
    },
  ];

  return (
    <div className="cont">

      <div className="menuCont">
        <Text title="Menu" fs={40} />
        <div className="itemCont">
          {data.map((item, i) => {
            return (
              <Text
                key={i}
                title={item.title}
                fs={20}
                b
                mt={20}
                p={10}
                color={
                  i == selected ? "#2d69ff" : i < selected ? "green" : "black"
                }
                onclick={() => {
                  setSelected(i);
                }}
              />
            );
          })}
        </div>
      </div>
      <div style={{ flex: 1 }}>{data[selected].component}</div>
    </div>
  );
};

export default Menu;
