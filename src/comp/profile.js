import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Data } from "../utils/data";
import { Input, Select, Date } from "./input";
import {Button,Text,Spacer,Row} from "./components";


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
    Data.personalInfo=data;
    console.log("inonclick",Data);
   next();
  };
  
  const initial = Data?.personalInfo || {};

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
              initial={initial}
            />
            <Input
              placeholder="lastName"
              width={30}
              register={register}
              label="lastName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}

            />
            <Input
              placeholder="middleName"
              width={30}
              register={register}
              label="middleName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}

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
            initial={initial}


          />
          <Spacer />
          <Row>
            <Select
              register={register}
              placeholder="Gender"
              label="gender"
              width={30}
              initial={initial}

            />
            <Date
              register={register}
              placeholder="Date of Birth"
              label="dob"
              width={30}
              initial={initial}

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
              initial={initial}

            />
            <Input
              placeholder="taluko"
              width={30}
              register={register}
              label="taluko"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}

            />
            <Input
              placeholder="village"
              width={30}
              register={register}
              label="village"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}

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
            initial={initial}

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
