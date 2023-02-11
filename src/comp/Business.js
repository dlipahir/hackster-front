import React from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Data } from "../utils/data";
import { postData } from "../utils/postData";

const Business = ({prev , next}) => {
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
    Data.farmerlinkages = data;
    console.log(Data);
    postData(Data);
    

   //next();
  };
  const initial = Data?.farmerlinkages || {};

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Business" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            // console.log(data);
            OnclickHandler(data);
          })}
        >
          <Input
            placeholder="Aggribusiness Linkages"
            width={30}
            register={register}
            label="aggrilink"
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
            initial={initial}
          />
          <Spacer />
          <Input
            placeholder="Corporative membership"
            width={30}
            register={register}
            label="membershiplink"
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
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
              value="Update"
              onClick={showErrorToast}
            />
          </Row>
        </form>
      </div>
    </div>
  );
};

export default Business;
