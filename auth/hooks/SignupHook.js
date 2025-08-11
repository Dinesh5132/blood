"use client";
import { API } from "@/url/url";
import { signupSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function SignupHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signupSchema) });

  const onSubmit = async (data) => {
    console.log("Signup Data:", data);
    try {
      const response = await API.post("/signup", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return { register, handleSubmit, errors, onSubmit };
}
