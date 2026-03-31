import { useState } from "react";

export default function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
    <div className="wrapper">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter Password"
        required
      />

      <span onClick={() => setShowPassword(!showPassword)}>
        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
      </span>
    </div>
    </>
  );
}