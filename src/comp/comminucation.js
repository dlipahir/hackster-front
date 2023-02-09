import React, { useEffect } from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row, BottomButtons } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { RecaptchaVerifier } from "firebase/auth";

const Comm = ({ prev, next }) => {
  const phoneNumber = "+919313903585";
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
    signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier)
      .then((confirmationResult) => {
        toast("message sent to given number");
        window.confirmationResult = confirmationResult;
        console.log("code sent", confirmationResult);

        confirmationResult
          .confirm("123456")
          .then((result) => {
            // User signed in successfully.
            //const user = result.user;
            console.log("verify", result);
            // ...
          })
          .catch((error) => {
            // User couldn't sign in (bad verification code?)
            // ...
          });

        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error);
      });
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
    next();
  };

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
              validation={{ required: true, maxLength: 10,minLength: 10,pattern: {
                value: /^[0-9]+$/,
                message: "inavlid"
              }}}
              errors={errors}
            />
            <Input
              placeholder="email"
              width={30}
              register={register}
              label="email"
              validation={{ required: true, maxLength: 20 }}
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
            />
            <Input
              placeholder="emailOtp"
              width={30}
              register={register}
              label="emailOtp"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />

          <Row>
            <Button
              // input
              type="submit"
              value="Previous"
              onClick={SendOtp}
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
