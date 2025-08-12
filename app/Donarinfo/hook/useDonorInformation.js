import { bloodRequestSchema, donorSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function useDonorInformation() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(donorSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setIsSubmitted(true);
  };
  return {
    onSubmit,
    errors,
    router,
    register,
    setIsSubmitted,
    isSubmitted,
    handleSubmit,
    reset,
  };
}
