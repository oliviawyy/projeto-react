import { useState, useEffect } from 'react';


function Consulta() {
    const [produto, setProduto] = useState([]);
    async function buscarProdutos() {
        const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/');
        const dados = await response.json()
        setProduto(dados);


    }
    useEffect(() => {
        buscarProdutos()
    }, [])

    return (
        <div>
            <h2>Produtos Disponiveis:</h2>
            <button onClick={buscarProdutos}>Notebook</button>
            <button onClick={buscarProdutos}>Smartphone</button>
            <ul>
                {produto.map((produto) => (
                    <li className=''>

                    </li>))}
                
            </ul>

        </div>



    )
}
export default Consulta