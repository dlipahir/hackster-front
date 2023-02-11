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
import { Data } from "../utils/data";

const Yeild = ({prev , next}) => {
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
    Data.yeildInfo=data;
    console.log(Data);
   next();
  };

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Yeild Information" fs={40} />
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
              values={["land 1","land 2","land 3"]}
            />
            <Input
              placeholder="year"
              width={30}
              register={register}
              label="year"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />
          <Row>
          <Select
              register={register}
              placeholder="cropType"
              label="cropType"
              width={30}
              values={["Kharif","Ravi"]}
            />
            <Input
              placeholder="cropName"
              width={30}
              register={register}
              label="cropName"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
          </Row>
          <Spacer />

          <Row>
            <Input
              placeholder="quintity"
              width={30}
              register={register}
              label="quintity"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
            <Select
              register={register}
              placeholder="unit"
              label="unit"
              width={30}
              values={["Kg","20 Kg","100 Kg"]}
            />
          </Row>
          <Spacer />
          <Row>
            <Input
              placeholder="totalPrice"
              width={30}
              register={register}
              label="totalPrice"
              validation={{ required: true, maxLength: 20 }}
              errors={errors}
            />
               <Select
              register={register}
              placeholder="harvestTech"
              label="harvestTech"
              width={30}
              values={["Machine Thresher","Hand Harvesting"]}
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

export default Yeild;
