import { useState } from "react";
import Button from "./components/button";
import Input from "./components/input";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: name,
      email: email
    };
    console.log(data);
    handleSubmitUser(data);
  }
  const handleSubmitUser = async (user) => {
    const response = await fetch(
      'https://626882c4f2c0cdabac0078d8.mockapi.io/aaa',
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      }
    );
    const data = await response.json();
    console.log(data);

  }

  return (
    <div className="App">
      <h1>Inputs</h1>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="name">Nome</label>
        <input
        type= 'text'
        id="name"
        value={name}
        onChange={(event) => {
          console.log(event);
          console.log(event.nativeEvent.data); 
          setName(event.target.value)
        }}
        />

        <label htmlFor="email">E=mail</label>
        <input
        type="text"
        id="email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        ></input> */}

        <Input 
        id="name"
        type="text"
        placeHolder="informe seu nome"
        label="Nome"
        name="name"
        value={name}
        setValue={setName}
        />
        <Input 
        id="email"
        type="text"
        placeHolder="informe seu e-mail"
        label="Email"
        name="email"
        value={email}
        setValue={setEmail}
        />

        <Button>Enviar</Button>
      </form>
    </div>
  );
}

export default App;
