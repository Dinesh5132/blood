// hooks/useBloodBankForm.js
"use client";
import { useForm } from "react-hook-form";
import { bloodBankSchema } from "@/validations/Formvalidations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function useBloodBankForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(bloodBankSchema),
  });

  const onSubmit = (data) => {
    // Prepare file details if provided
    let documentDetails = null;
    if (data.documentFile && data.documentFile.length > 0) {
      const file = data.documentFile[0];
      documentDetails = {
        name: file.name,
        type: file.type,
        sizeKB: (file.size / 1024).toFixed(2),
      };
    }

    const submissionData = {
      bloodBankName: data.bloodBankName,
      phone: data.phone,
      registrationId: data.registrationId,
      address: data.address,
      email: data.email,
      components: data.components,
      openingTime: data.openingTime,
      closingTime: data.closingTime,
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      documentType: data.documentType,
      terms: data.terms,
      documentDetails,
    };

    console.log("📌 Blood bank registration submitted:", submissionData);
    setIsSubmitted(true);
  };

  return {
    register,
    handleSubmit,
    errors,
    router,
    onSubmit,
    setIsSubmitted,
    isSubmitted,
  };
}
