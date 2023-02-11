import React, { useEffect, useState } from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row, BottomButtons } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "./farm.style.scss";
import { Data } from "../utils/data";

const Farm = ({ prev, next }) => {
  const [farm, setFarm] = useState(false);
  const [myfarm, setMyFarm] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();
  //console.log(errors);
  useEffect(()=>{
   setMyFarm(Data?.farmlocationDetails || []);
  },[])

  const showErrorToast = () => {
    if (Object.keys(errors).length) {
      for (var prop in errors) {
        if (errors.hasOwnProperty(prop)) {
          //console.log(`${prop} ${errors[prop].type}`);
          toast.error(`${prop} ${errors[prop].type}`);
        }
      }
    }
  };
  const OnclickHandler = (data) => {
    console.log("inonclick", data);
    Data.farmlocationDetails = myfarm;
    console.log(Data);
    next();
  };

  const handleCheck = async () => {
    const upin = getValues("upin");
    try {
      const response = await fetch(
        `https://hack-roso.onrender.com/getland/${upin}`
      );
      const res = await response.json();
      console.log(res);
      setFarm(res);
    } catch (err) {
      //setErr("error !!!")
      console.log("error", err);
    }
  };

  const handleCheckByname = async () => {
    // if (!district || !taluka || !village || !surveyNum)  return;

    const body = {
      district: getValues("district"),
      taluka: getValues("taluka"),
      village: getValues("village"),
      newSurveyNumber: getValues("surveyNum"),
    };
    console.log(body);

    try {
      const response = await fetch(
        `https://hack-roso.onrender.com/getlandbyname/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      const res = await response.json();
      console.log(res);
      setFarm(res);
    } catch (err) {
      //setErr("error !!!")
      console.log("error", err);
    }
  };

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Farm Location and details" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Input
              placeholder="district"
              width={30}
              register={register}
              label="district"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="taluka"
              width={30}
              register={register}
              label="taluka"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}

            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="village"
              width={30}
              register={register}
              label="village"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}

            />
            <Input
              placeholder="surveyNum"
              width={30}
              register={register}
              label="surveyNum"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}

            />
          </Row>
          <Spacer ml={30} />

          <Button
            // input
            type="button"
            value="Search By above details"
            onClick={handleCheckByname}
          />
          <Spacer />
          <Text title="OR" />
          <Spacer />
          <Input
            placeholder="upin"
            width={30}
            register={register}
            label="upin"
            validation={{ required: true, maxLength: 20 }}
            errors={errors}

            />
          <Spacer ml={30} />

          <Button
            // input
            type="button"
            value="Search By Upin"
            onClick={handleCheck}
          />

          <Spacer ml={50} />

          <Row>
            <Button
              // input
              type="submit"
              value="Previous"
              onClick={prev}
            />
            <Button
              // input
              type="button"
              value="Next"
              onClick={OnclickHandler}
            />
          </Row>
          {/* <BottomButtons prevHandler={prev} nextHandler={next} errors = {errors} /> */}
        </form>
      </div>

      <div hidden={!farm}>
      <Spacer ml={30} />
        <FieldBox farm={farm} />
        <Spacer ml={30} />
        <Button type= "button" value="add to feild" onClick={() => {
          if(!myfarm.includes(farm))
          setMyFarm([...myfarm,farm]) }}>ADD</Button>
      </div>
      <Spacer ml={30} />
      <div className="outerfarmcont" hidden={!myfarm.length}>
      <h1>MY FARM</h1>
      <Spacer ml={30} />
        {
        myfarm.map((farm,i)=>{
           return <div key={i}>
           <FieldBox farm={farm}/>
      <Spacer ml={30} />

           </div>
        })
      }
      </div>
    </div>
  );
};

export default Farm;

export const FieldBox = ({ farm }) => {
  return (
    <>
      <div className="farm-container">
        <div className="fieldImg">
          <img src="https://i.ibb.co/GdKRHGT/asf2.png" alt=""  />
        </div>
        <div className="fieldLoc">
          <div>
            district:<span>{farm?.district}</span>
          </div>
          <div>
            taluka:<span>{farm.taluka}</span>
          </div>
          <div>
            village:<span>{farm.village}</span>
          </div>
        </div>
        <div className="fieldLoc">
          <div>
            owner:<span>{farm.owner}</span>
          </div>
          <div>
            landTitle: <span>{farm.landTitle}</span>
          </div>
          <div>
            UPIN:<span>{farm.UPIN}</span>
          </div>
        </div>
        <div className="fieldLoc">
          <div>
            totalArea:<span>{farm.totalArea}</span>
          </div>
          <div>
            landUse:<span>{farm.landUse}</span>
          </div>
          <div>
            newSurveyNumber:<span>{farm.newSurveyNumber}</span>
          </div>
        </div>
      </div>
    </>
  );
};
