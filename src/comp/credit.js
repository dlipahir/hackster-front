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

const Credit = ({prev , next}) => {
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
      <Text title="Credit Information" fs={40} />
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
              placeholder="landTitle"
              label="landTitle"
              width={30}
            />
            <Input
              placeholder="upin"
              width={30}
              register={register}
              label="upin"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Select
              register={register}
              placeholder="LoanType"
              label="LoanType"
              width={30}
              values={["crop Loan","Agriculture term Loan","Solar pump set Loan","Loan for Aplied Agricultural Activities","Farm Mechanisation Loan","Agricultural Gold Loan","Forestry Loan","Horficulture Loan","other types of Loan"]}
            />
            <Input
              placeholder="bankName"
              width={30}
              register={register}
              label="bankName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />

          <Row>
            <Input
              placeholder="ifsc"
              width={30}
              register={register}
              label="ifsc"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="accountNumber"
              width={30}
              register={register}
              label="accountNumber"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="loanSize"
              width={30}
              register={register}
              label="loanSize"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Input
              placeholder="perpose"
              width={30}
              register={register}
              label="perpose"
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

export default Credit;
