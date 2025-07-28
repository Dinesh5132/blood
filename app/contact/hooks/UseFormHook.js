import { formSchema } from "@/validations/Formvalidations";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function UseFormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const onSubmit = async (data) => {
    console.log(data);
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
}
