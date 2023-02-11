import React from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row } from "./components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Data } from "../utils/data";

const initial = {
  accountNumber: "cvb",
  bankName: "vccb",
  branchName: "vcb",
  district: "vb",
  ifsc: "vcb",
  taluko: "cvb",
};

const Bank = ({prev , next}) => {
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
    Data.bankdetails = data;
    console.log(Data);
   next();
  };
  const initial = Data?.bankdetails || {};

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Bank Details" fs={40} />
      <Spacer />
      <div style={{}}>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Input
              placeholder="bankName"
              width={30}
              register={register}
              label="bankName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
            <Input
              placeholder="branchName"
              width={30}
              register={register}
              label="branchName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
          </Row>
          <Spacer />
          <Row>
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
              placeholder="district"
              width={30}
              register={register}
              label="district"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="accountNumber"
              width={30}
              register={register}
              label="accountNumber"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
            />
            <Input
              placeholder="ifsc"
              width={30}
              register={register}
              label="ifsc"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
              initial={initial}
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

export default Bank;
