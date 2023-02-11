import React, { useEffect,useState } from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row, BottomButtons } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";
import { Data } from "../utils/data";

const Comm = ({ prev, next }) => {
  const [otp, setotp] = useState()

  const {
    watch,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const watchMobile = watch("mobileNumber", false);
  const watchMobileOtp = watch("mobileNumberOtp", false);



  const phoneNumber = "+91";
  //const appVerifier = window.recaptchaVerifier;
  const auth = getAuth();

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "normal",
          callback: (response) => {},
          "expired-callback": () => {},
        },
        auth
      );
    }
  }, []);

  const SendOtp = () => {
  if(errors.hasOwnProperty("mobileNumber")) {
    console.log(errors);
    return;
  }


    signInWithPhoneNumber(auth,"+91" +  watchMobile, window.recaptchaVerifier)
      .then((confirmationResult) => {
        toast("message sent to given number");
        window.confirmationResult = confirmationResult;
        console.log("code sent", confirmationResult);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const VerifyOtp = ()=>{
    window.confirmationResult
    .confirm(watchMobileOtp)
    .then((result) => {
      toast.success(`${result.user.phoneNumber} verified`);
      console.log("verify", result.user.phoneNumber);
      Data.communicationDetails = {mobileNumber: watchMobile};
    
    })
    .catch((error) => {
      console.log(error);
    });
  }

  

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
   // console.log(watchMobile);
    //next();
    if(Data.communicationDetails) {next();}
    else { toast.error("verify mobile no.") }
  };
  const initial = Data?.communicationDetails || {};


  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Comminucation" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Input
              placeholder="mobileNumber"
              width={30}
              register={register}
              label="mobileNumber"
              validation={{
                required: true,
                maxLength: 10,
                minLength: 10,
                pattern: {
                  value: /^[0-9]+$/,
                  message: "inavlid",
                },
              }}
              errors={errors}
              initial={initial}
            />
            <Input
              placeholder="email (optional)"
              width={30}
              register={register}
              label="email"
              validation={{ maxLength: 20 }}
              initial={initial}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="mobileNumberOtp"
              width={30}
              register={register}
              label="mobileNumberOtp"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
            <Input
              placeholder="emailOtp"
              width={30}
              register={register}
              label="emailOtp"
              validation={{ maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
          </Row>
          <Spacer />

          <Row>
            <Button
              // input
              type="submit"
              value="sendOtp"
              onClick={SendOtp}
            />
            <Button
              // input
              type="submit"
              value="Verify"
              onClick={showErrorToast}
            />
          </Row>
          <Spacer />
          <Row>
            <Button
              // input
              type="submit"
              value="Verifyotp"
              onClick={VerifyOtp}
            />
            <Button
              // input
              type="submit"
              value="Verify"
              onClick={showErrorToast}
            />
          </Row>
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
          {/* <BottomButtons prevHandler={prev} nextHandler={next} errors = {errors} /> */}
        </form>
      </div>
      <Spacer />
    </div>
  );
};

export default Comm;
