export const handleVerify = async (
  e,
  { otp, formData, setIsError, setIsVerify, setEmailVerified }
) => {
  e.preventDefault();

  if (!otp) {
    setIsError("Please enter your OTP.");
    return;
  }

  if (otp.length !== 6) {
    setIsError("OTP must be 6 digits.");
    return;
  }
  setIsError("");

  try {
    const response1 = await fetch("https://portfolio-project-rues.onrender.com/verify-OTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email, // ✅ same email used in send-OTP
        otp: otp, // ✅ value user typed
      }),
    });
    const data1 = await response1.json();

    if (!response1.ok) {
      setIsError(data1.message || "Verification failed.");
      return;
    }

    
    setEmailVerified(true);
    const response2 = await fetch("https://portfolio-project-rues.onrender.com/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
    });
    const data2 = await response2.json();
    if (!response2.ok) {
      setIsError(data2.message || "Message sending failed.");
      return;
    }
    setIsError("");
    setIsVerify(true);
  } catch (err) {
    console.error("Verification error:", err);
    setIsError("Something went wrong. Try again.");
  }
};
