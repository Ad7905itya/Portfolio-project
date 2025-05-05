export const handleSubmit = async (
  e,
  {
    formData,
    setFormData,
    setSendData,
    SendData,
    setError,
    Error,
    setLoading,
    setIsOpen,
  }
) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validDomains = ["gmail.com", "yahoo.com", "outlook.com"];
  let newErrors = { ...Error };
  let isError = false;

  // Name Validation
  if (!formData.name.trim()) {
    newErrors.name.error = true;
    newErrors.name.message = newErrors.name.message1;
    isError = true;
  } else if (formData.name.length < newErrors.name.minLength) {
    newErrors.name.error = true;
    newErrors.name.message = newErrors.name.message2;
    isError = true;
  } else if (/\d/.test(formData.name)) {
    newErrors.name.error = true;
    newErrors.name.message = newErrors.name.message3;
    isError = true;
  } else {
    newErrors.name.error = false;
    newErrors.name.message = "";
  }

  // Check if email is entered
  if (!formData.email.trim()) {
    newErrors.email.error = true;
    newErrors.email.message = newErrors.email.message1;
    isError = true;
  }
  // Check if email format is valid
  else if (!emailRegex.test(formData.email)) {
    newErrors.email.error = true;
    newErrors.email.message = newErrors.email.message2;
    isError = true;
  }
  // Check if email domain is valid
  else {
    const emailDomain = formData.email.split("@")[1];
    if (!validDomains.includes(emailDomain)) {
      newErrors.email.error = true;
      newErrors.email.message = "Email must be a valid email address";
      isError = true;
    } else {
      newErrors.email.error = false;
      newErrors.email.message = "";
    }
  }

  // Message Validation
  if (!formData.message.trim()) {
    newErrors.message.error = true;
    newErrors.message.message = newErrors.message.message1;
    isError = true;
  } else if (formData.message.length < newErrors.message.minLength) {
    newErrors.message.error = true;
    newErrors.message.message = newErrors.message.message2;
    isError = true;
  } else {
    newErrors.message.error = false;
    newErrors.message.message = "";
  }

  setError(newErrors);

  if (isError) {
    setLoading(false);
    return;
  }

  // ✅ SendData only after validation
  setSendData({
    name: formData.name,
    email: formData.email,
    message: formData.message,
  });

  setLoading(true);

  try {
    const response = await fetch("https://portfolio-project-rues.onrender.com/send-OTP", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
      }),
    });

    if (!response.ok) {
      console.error("Error sending OTP email:", response.status);
      setLoading(false);
      return;
    }

    setIsOpen(true);
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    setLoading(false);
  }
};
