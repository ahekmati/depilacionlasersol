"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

import { Button } from "../ui/button";
import { redirect } from "next/navigation";

const HomeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    redirect("/vedio1");
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 space-y-5 rounded-lg bg-opacity-70 text-black lg:mx-auto lg:w-full"
      >
        {/* name */}
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="text"
            id="name"
            placeholder="Name"
            className="border-black bg-transparent px-4 py-5"
            {...register("name", {
              required: "Name is required",
            })}
          />
          {errors.name && (
            <span className="shake-hr text-red-500">{errors.name.message}</span>
          )}
        </div>
        {/* email */}
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="email"
            id="email"
            placeholder="Email"
            className="border-black bg-transparent px-4 py-5"
            {...register("email", {
              required: "Email is required",
              validate: (value) => {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                  return "Must be a valid email";
                }
                return true;
              },
            })}
          />
          {errors.email && (
            <span className="shake-hr text-red-500">
              {errors.email.message}
            </span>
          )}
        </div>
        {/* number */}
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="number"
            id="number"
            placeholder="Phone Number"
            className="border-black bg-transparent px-4 py-5"
            {...register("number", {
              required: "number is required",
            })}
          />
          {errors.number && (
            <span className="shake-hr text-red-500">
              {errors.number.message}
            </span>
          )}
        </div>
        {/* website */}
        <div className="grid w-full items-center gap-1.5">
          <Input
            type="text"
            id="website"
            placeholder="Website"
            className="border-black bg-transparent px-4 py-5"
            {...register("website", {
              required: "Email is required",
            })}
          />
          {errors.website && (
            <span className="shake-hr text-red-500">
              {errors.website.message}
            </span>
          )}
        </div>

        <div>
          <Button
            type="submit"
            className="px-y mt-10 block h-[2.7rem] w-full border-2 border-black bg-black text-xl text-white hover:text-black"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  );
};

export default HomeForm;
