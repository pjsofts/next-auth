"use client";

import { login } from "@/service/login";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  return (
    <div>
      <div>
        <input className="m-4 p-4" type="text" name="username" />
      </div>
      <div>
        <input className="m-4 p-4" type="password" name="password" />
      </div>

      <button
        onClick={async () => {
          const data = await login();
          console.log("button clicked", data);
          document.cookie = `token=${data.token}`;
          location.href = "http://localhost:3000/" + callbackUrl;
        }}
        className="m-4 p-4 border-solid border-[1px] border-white"
        type="button"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
