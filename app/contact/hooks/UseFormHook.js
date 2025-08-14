"use client";
import { formSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function UseFormHook() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = (data) => {
    console.log("Success:", data);
    alert("Your message has been sent!");
    reset();
  };

  return {
    onSubmit,
    handleSubmit,
    register,
    errors,
  };
}
