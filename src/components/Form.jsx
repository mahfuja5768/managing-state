import { useState } from "react";

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
}

export default function Form() {
  // form empty, typing, submitting, success, error
  // form typing, submitting, success

  //mandatory data state
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") return <h1>That right!</h1>;

  const handleText = (e) => {
    setError(null)
    setAnswer(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(answer);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  };

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleText}
          disabled={status === "submitting"}
        />

        <br />
        <button disabled={answer === "" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading.....</p>}
        {error && <p>{error}</p>}
      </form>
    </>
  );
}
