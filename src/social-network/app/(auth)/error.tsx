"use client";

import AuthError from "@/components/error/authError";

const Error = ({ error, reset }) => {
  return <AuthError error={error} reset={reset} />;
};

export default Error;
