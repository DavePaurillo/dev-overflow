"use client";

import { AuthForm } from "@/components/forms/AuthForm";
import { signUpWithCredentials } from "@/lib/actions/auth.action";
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
        onSubmit={signUpWithCredentials}
      />
    </div>
  );
}
