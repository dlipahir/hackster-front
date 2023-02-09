import React from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Insurance = ({prev , next}) => {
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
      <Text title="Insurance" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Select
              register={register}
              placeholder="companyName"
              label="companyName"
              width={30}
              values={["HDFC Bank","SBI Bank","Federal Bank","Lic Bank","Other Company"]}
            />
            <Select
              register={register}
              placeholder="insuranceType"
              label="insuranceType"
              width={30}
              values={["Pradhan Matri fasal Bima Yojana","Restructured weather based crop insurance scheme (RWBCIS)","Bangla Shasya Bima Schema","Coconut Palm Insurance Scheme","Other Crop Insurance"]}
            />
          </Row>
          <Spacer />
          <Row>
            <Date
              register={register}
              placeholder="applieddate"
              label="applieddate"
              width={30}
            />
            <Select
              register={register}
              placeholder="cropSeason"
              label="cropSeason"
              width={30}
              values={["Kharif","Ravi"]}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="cropName"
              width={30}
              register={register}
              label="cropName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="fieldName"
              width={30}
              register={register}
              label="fieldName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="upin"
              width={30}
              register={register}
              label="upin"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="area"
              width={30}
              register={register}
              label="area"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="certificateNumber"
              width={30}
              register={register}
              label="certificateNumber"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="receiptNumber"
              width={30}
              register={register}
              label="receiptNumber"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Date
              register={register}
              placeholder="receivedDate"
              label="receivedDate"
              width={30}
            />
            <Select
              register={register}
              placeholder="recieveInfo"
              label="recieveInfo"
              width={30}
              values={["Yes","No"]}
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
        </form>
      </div>
    </div>
  );
};

export default Insurance;
