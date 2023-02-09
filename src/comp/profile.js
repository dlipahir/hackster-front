import React from "react";
// import Input from "./input";
// import Select from "./select";
import { Input, Select, Date } from "./input";

//import Text from "./text";
import {Button,Text,Spacer,Row,BottomButtons} from "./components";
//import Row from "./Row";
//import Spacer from "./spacer";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Profile = ({prev,next}) => {
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
   next();
  };

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Profile" fs={40}/>
      <Spacer/>
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Input
              placeholder="firstName"
              width={30}
              register={register}
              label="firstName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="lastName"
              width={30}
              register={register}
              label="lastName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="middleName"
              width={30}
              register={register}
              label="middleName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Input
            placeholder="adhar"
            width={50}
            register={register}
            label="adhar"
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
          />
          <Spacer />
          <Row>
            <Select
              register={register}
              placeholder="Gender"
              label="gender"
              width={30}
            />
            <Date
              register={register}
              placeholder="Date of Birth"
              label="dob"
              width={30}
            />
          </Row>
          <Spacer />

          <Row>
            <Input
              placeholder="distict"
              width={30}
              register={register}
              label="distict"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="taluko"
              width={30}
              register={register}
              label="taluko"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="village"
              width={30}
              register={register}
              label="village"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Input
            placeholder="homeAddrs"
            width={100}
            register={register}
            label="Home Address"
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
          />
          <Spacer />

          <Row>
            <Button
              // input
              type="submit"
              value="Previous"
              //onClick={OnclickHandler}
            />
            <Button
              // input
              type="submit"
              value="Next"
              onClick={showErrorToast}
            />
          </Row>
          {/* <BottomButtons prevHandler={prev} nextHandler={next} errors = {errors} /> */}
        </form>
      </div>
    </div>
  );
};

export default Profile;
