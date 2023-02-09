import React from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row, BottomButtons } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Farm = ({ prev, next }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //console.log(errors);

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

          <Spacer ml={50}/>
          
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

export default Farm;
