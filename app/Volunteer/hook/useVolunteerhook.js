"use client";

import { volunteerSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function useVolunteerhook() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(volunteerSchema),
  });

  const onSubmit = (data) => {
    // For file inputs, the data contains FileList objects, convert or upload accordingly
    if (data.idProofFile && data.idProofFile.length > 0) {
      // Example: get the first file
      const file = data.idProofFile[0];
      console.log("Uploaded file:", file);
      // handle file upload logic here
    }

    console.log("Form Submitted:", data);
    setIsSubmitted(true);
    // You can navigate or reset form here if needed
  };

  return {
    register,
    router,
    handleSubmit,
    errors,
    onSubmit,
    setIsSubmitted,
    isSubmitted,
    watch,
  };
}
