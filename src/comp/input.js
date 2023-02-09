import React from "react";
import { Text } from "./components";
import "./input.style.scss";

export const Input = ({
  placeholder = "type something...",
  width = 50,
  register,
  label = "name",
  validation = {},
  errors = {},
  initial = {},
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        //  background: "red",
      }}
    >
      <Text title={placeholder} mb={7} fs={15} />
      <input
        className="inp"
        style={{ width: `100%` }}
        //style={{ width: `${width}%` }}
        defaultValue={initial[label] ? initial[label] : ""}
        placeholder={placeholder}
        {...register(label, validation)}
      />
      {/* {errors[label] && <p role="alert">{errors[label]?.type}</p>} */}
    </div>
  );
};

//export default Input;

export const Select = ({
  placeholder = "type something...",
  width = 50,
  register,
  label = "name",
  validation = {},
  errors = {},
  values = ["male", "female"],
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        //  background: "red",
      }}
    >
      <Text title={placeholder} mb={7} fs={15} />
      <select
        className="select"
        style={{ width: "100%" }}
        {...register(label, { required: true })}
      >
        {values.map((opt, i) => {
          return (
            <option key={i} value={opt}>
              {opt}
            </option>
          );
        })}
      </select>
      {/* <input
        className="inp"
        style={{ width: `100%` }}
        //style={{ width: `${width}%` }}
        placeholder={placeholder}
        {...register(label, validation)}
      /> */}
      {/* {errors[label] && <p role="alert">{errors[label]?.type}</p>} */}
    </div>
  );
};
export const Date = ({
  placeholder = "type something...",
  width = 50,
  register,
  label = "name",
  validation = {},
  errors = {},
  values = ["male", "female"],
}) => {
  return (
    <div
      style={{
        width: `${width}%`,
        //  background: "red",
      }}
    >
      <Text title={placeholder} mb={7} fs={15} />
      <input
        type="date"
        {...register(label, { required: true })}
        className="select"
      />
    </div>
  );
};
