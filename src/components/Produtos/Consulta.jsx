

import { useState, useEffect } from "react";
import Produto from "./Produto";

function Consulta() {
  const [produto, setProduto] = useState(null);
// Inserir o produto no Local Storage
  useEffect(() => {

    const produtoLocal = localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);

   
  }, []);
// Recuperar o produto do Local Storage quando o produto for modificado pelo estado
  useEffect(() => {
    if (produto !== null) localStorage.setItem("produto", produto);
 }, [produto]);

// Extrair o texto do Botão quando o usuário clicar
  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <section>
      <h1>Preferencia: {produto}</h1>

      <button onClick={handleClick}>Notebook</button>

      <button onClick={handleClick}>Smartphone</button>

      <button onClick={handleClick}>Camera</button>

      <Produto produto={produto} />
    </section>
  );
}

export default Consulta;