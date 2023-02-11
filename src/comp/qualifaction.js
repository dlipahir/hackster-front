import React from "react";
// import Input from "./input";
// import Select from "./select";
import { Input, Select, Date } from "./input";

//import Text from "./text";
import { Button, Text, Spacer, Row } from "./components";
//import Row from "./Row";
//import Spacer from "./spacer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Data } from "../utils/data";

const Qualifaction = ({prev , next}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //console.log(errors);

  const showErrorToast = ()=>{
    if(Object.keys(errors).length){
      for (var prop in errors) {
        if (errors.hasOwnProperty(prop)) {
          //console.log(`${prop} ${errors[prop].type}`);
          toast.error(`${prop} ${errors[prop].type}`);
        }
      }
    }
  }
  const OnclickHandler = (data) => {
    console.log("inonclick",data);
    Data.QualificationDetails= data;
    console.log(Data);
   next();
  };
  const initial = Data?.QualificationDetails || {};

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Qualifaction" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
           // console.log(data);
           OnclickHandler(data);
          })}
        >
          <Select
            register={register}
            placeholder="qualification"
            label="qualification"
            width={30}
            values={["7th Pass Or Less","Between 8th and 9th Standard","10th Pass And Above","Graduate And Above"]}
            initial={initial}

          />

          <Spacer />

          <Row>
            <Button
              // input
              type="submit"
              value="Previous"
              onClick={prev}
            />
            <Button
              // input
              type="submit"
              value="Next"
              onClick={showErrorToast}
            />
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Qualifaction;
