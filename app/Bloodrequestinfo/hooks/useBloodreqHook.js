"use client";
import { bloodRequest } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function useBloodreqHook() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(bloodRequest),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
  };
  return {
    onSubmit,
    register,
    handleSubmit,
    errors,
    setIsSubmitted,
    isSubmitted,
    router,
  };
}
