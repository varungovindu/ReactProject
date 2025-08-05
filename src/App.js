import OTP from "./components/OTP";

export default function App() {
  return (
    <div className="App">
      <OTP otpLength={6} />
    </div>
  );
}