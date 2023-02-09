import React from "react";
import "./components.style.scss";

export const Text = ({
  title = "helloo",
  fs = 20,
  color = "black",
  b,
  m = 0,
  ml = 0,
  mt = 0,
  mb = 0,
  mr = 0,
  p = 0,
  onclick=()=>{}
}) => {
  return (
    <div
      style={{
        fontSize: fs,
        color: color,
        fontWeight: b ? "bold" : "normal",
        // background: "cyan",
        marginLeft: ml,
        marginTop: mt,
        marginBottom: mb,
        marginRight: mr,
        fontFamily: "lexend",
        padding: p,
      }}
      onClick={onclick}
    >
      {title}
    </div>
  );
};

export const Button = ({ children, onClick, type, value }) => {
  return (
    //<div className='button'>{children}</div>
    <input type={type} value={value} className="button" onClick={onClick} />
  );
};

export const Row = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        // background: "cyan",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {children}
    </div>
  );
};

export const Spacer = ({ ml = 20 }) => {
  return <div style={{ marginTop: ml }}></div>;
};

export const BottomButtons = ({nextHandler = ()=>{},prevHandler=()=>{},errors={}}) => {
  return (
    <Row>
      <Button
        // input
        type="submit"
        value="Previous"
        onClick={prevHandler}
      />
      <Button
        // input
        type="submit"
        value="Next"
        onClick={()=>nextHandler(errors)}
      />
    </Row>
  );
};
