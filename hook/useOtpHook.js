import { phoneSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function useOtpHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(phoneSchema),
  });

  const onSubmit = (data) => {
    const fullNumber = `${data.countryCode}${data.phoneNumber}`;
    console.log("Submitting:", fullNumber);
  };
  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
}
