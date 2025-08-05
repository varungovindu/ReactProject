import { useState, useRef, useEffect } from "react";
import "./style.css";

export default function OTP({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  function handleKeyDown(e, index) {
    const key = e.key; // This tells us which keyboard key has been pressed
    // console.log(key, e);

    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (key === "ArrowRight") {
      if (index + 1 < otpFields.length) ref.current[index + 1].focus();
      return;
    }

    // Make a copt of the current array
    const copyOtpFields = [...otpFields];

    // Let's check if the key is backspace
    // and delete the digit in that scenario
    if (key === "Backspace") {
      copyOtpFields[index] = "";
      setOtpFields(copyOtpFields);

      if (index > 0) ref.current[index - 1].focus();
    }

    // We should allow single digit entry only
    if (!/^\d$/.test(key)) {
      // We check if the pressed key is not a number
      // we simply return from this function
      // as only numbers are allowed!
      return;
    }

    copyOtpFields[index] = key;
    setOtpFields(copyOtpFields);

    // use ref to focus on the next input box when an input is done
    if (index + 1 < otpFields.length) ref.current[index + 1].focus();
  }

  function handlePaste(e) {
    e.preventDefault();

    const pastedData = e.clipboardData.getData("text");
    const digits = pastedData.match(/\d/g); // We are using this regex to extract the digits from the pasted data

    if (!digits) return;

    const nextOtp = otpFields.slice();

    // In  our current implementation
    // we will always paste from the beginning!!
    for (let i = 0; i < otpLength && digits.length; ++i) {
      nextOtp[i] = digits[i];
    }
    setOtpFields(nextOtp);

    const nextFocus = digits.length < otpLength ? digits.length : otpLength - 1;
    ref.current[nextFocus]?.focus();
  }

  useEffect(() => {
    ref.current[0]?.focus();
  }, []);

return (
  <>
    <h2 className="otp-title">Enter OTP</h2>
    <div className="container">
      {otpFields.map((value, index) => (
        <input
          key={index}
          ref={(currentInput) => (ref.current[index] = currentInput)}
          value={value}
          type="text"
          maxLength={1}
          className="otp-input"
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  </>
);

}
