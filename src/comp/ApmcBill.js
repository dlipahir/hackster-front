import React, { useState } from "react";
import { Input, Select, Date } from "./input";
import { Button, Text, Spacer, Row } from "./components";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Data } from "../utils/data";

const ApmcBill = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  //console.log(errors);
  const [show, setshow] = useState(false);

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
  const OnclickHandler = async (data) => {
    console.log("inonclick", data);
    const body = {
      farmId: data.FarmId,
      bills: data,
    };
    try {
      const response = await fetch(
        "https://hack-roso.onrender.com/postbill",
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
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div style={{ padding: 50, background: "transparent", width: "100%" }}>
      <Text title="Apmc Bill" fs={40} />
      <Spacer />
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            OnclickHandler(data);
          })}
        >
          <Row>
            <Input
              register={register}
              placeholder="Farmer Id"
              label="FarmId"
              width={30}
              validation={{ required: true, maxLength: 20 }}
            />
          </Row>
          <Spacer />

          <Row>
            <Select
              register={register}
              placeholder="landTitle"
              label="landTitle"
              width={30}
              values={["land 1", "land 2", "land 3"]}
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
              values={["Kharif", "Ravi", "Zaid"]}
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
              values={["Kg", "20 Kg", "100 Kg"]}
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
          </Row>
          <Spacer />

          <Row>
            <Button type="submit" value="submit" onClick={showErrorToast} />
          </Row>
        </form>
      </div>
    </div>
  );
};

export default ApmcBill;
