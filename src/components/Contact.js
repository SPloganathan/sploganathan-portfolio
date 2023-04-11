import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onInputChangeHandler = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "email") {
      setEmail(event.target.value);
    } else if (event.target.name === "message") {
      setMessage(event.target.value);
    }
    setErrorMessage("");
  };

  const onValidateHandler = (event) => {
    if (event.target.name === "name") {
      if (name === "") setErrorMessage("Name field cannot be empty");
    } else if (event.target.name === "email") {
      if (
        email === "" ||
        !/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/.test(email)
      )
        setErrorMessage("Please enter a valid email");
    } else if (event.target.name === "message") {
      if (message === "") setErrorMessage("Message field cannot be empty");
    }
  };

  const onSubmitClickHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container contact-container mt-3">
      <h2>Reach us at </h2>
      <form className="row g-3 col-md-6 col-lg-6">
        <div className="col-12 ">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={(e) => onInputChangeHandler(e)}
            onBlur={(e) => onValidateHandler(e)}
          />
        </div>
        <div className="col-12 ">
          <label for="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={(e) => onInputChangeHandler(e)}
            onBlur={(e) => onValidateHandler(e)}
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="col-12 ">
          <label for="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            name="message"
            onChange={(e) => onInputChangeHandler(e)}
            onBlur={(e) => onValidateHandler(e)}
          >
            {message}
          </textarea>
        </div>
        <div className="col-12 ">
          <div
            className="invalid-feedback"
            style={{ display: `${errorMessage === "" ? "none" : "block"}` }}
          >
            {errorMessage}!
          </div>
        </div>
        <div className="col-12">
          <button
            className="btn btn-primary"
            type="submit"
            onClick={onSubmitClickHandler}
          >
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
