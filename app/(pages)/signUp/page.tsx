"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { userAuth } from "@/components/providers/Auth_context";

const SignUp = () => {
  const router = useRouter();
  const [client, setClient] = useState({
    email: "",
    password: "",
  });

  const { user, signup } = userAuth();

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      await signup(client.email, client.password);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form>
        <label>Email</label>
        <input
          id="user_email"
          type="email"
          name="email"
          required
          value={client.email}
          onChange={(e: any) => setClient({ ...client, email: e.target.value })}
          placeholder="Email"
          autoComplete="off"
        />
        <label>Password</label>
        <input
          id="user_email"
          type="password"
          name="password"
          required
          value={client.password}
          onChange={(e: any) =>
            setClient({ ...client, password: e.target.value })
          }
          placeholder="password"
          autoComplete="off"
        />
        <button onClick={handleSignup}>sign-up</button>
      </form>
    </div>
  );
};

export default SignUp;
