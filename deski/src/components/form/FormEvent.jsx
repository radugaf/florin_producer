import React from "react";

const FormEvent = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onClick={handleSubmit}>
      <input type="text" placeholder="Adresa de email" />
      <button>Aboneaza-te</button>
    </form>
  );
};

export default FormEvent;
