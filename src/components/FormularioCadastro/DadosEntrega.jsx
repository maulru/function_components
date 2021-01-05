import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega() {
  return (
    <form>
      <TextField
        id="cep"
        label="CEP"
        type="number"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField
        id="endereco"
        label="Endereço"
        type="text"
        variant="outlined"
        fullWidth
        margin="dense"
      />
      <TextField id="numero" label="Numero" type="number" variant="outlined" />
      <TextField id="estado" label="Estado" type="text" variant="outlined" />
      <TextField id="cidade" label="Cidade" type="text" variant="outlined" />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
