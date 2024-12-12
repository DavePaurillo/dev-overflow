"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";

export default function SignUp() {
  return (
    <div>
      <AuthForm
        formType="SIGN_UP"
        schema={SignUpSchema}
        defaultValues={{
          email: "",
          password: "",
          name: "",
          username: "",
        }}
        onSubmit={(data) => {
          return Promise.resolve({ success: true, data });
        }}
      />
    </div>
  );
}
