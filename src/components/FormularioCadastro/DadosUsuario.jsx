import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({aoEnviar}) {
  return (
    <form onSubmit={(event) =>{
      event.preventDefault();
      aoEnviar();
    }}>
      <TextField
        id="email"
        label="email"
        type="email"
        required
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        id="senha"
        required
        label="senha"
        type="password"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
