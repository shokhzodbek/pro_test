import "./Login.css";
import { useState } from "react";
function Login() {
  const [phone, setPhone] = useState("");
  const [ism, setIsm] = useState("");
  console.log(phone);
  console.log(ism);
  function sendData(e) {
    e.preventDefault();
    alert(`Ism ${ism} Telefon ${phone}`);
    setPhone("");
    setIsm("");
  }
  return (
    <>
      <div className="login">
        <form>
          <h3>Ruyhatdan o'tish</h3>
          <label htmlFor="">Phone</label>
          <br />
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="">ism</label>
          <br />
          <input
            type="text"
            value={ism}
            onChange={(e) => setIsm(e.target.value)}
          />
          <button onClick={sendData}>Send</button>
        </form>
      </div>
    </>
  );
}

export default Login;
