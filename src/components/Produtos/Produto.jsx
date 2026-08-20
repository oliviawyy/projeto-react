import { useState, useEffect } from 'react';
import styles from './Produto.module.css'

function Produto() {
    const [produto, setProduto] = useState([]);
    useEffect(() => {
        {
            async function fetchProduto() {
                const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/');

                console.log(response);

                const dados = await response.json()
                setProduto(dados);

                console.log(dados)
                console.log(dados.nome)
                console.log(dados.preco)
            

            };
            fetchProduto()
        }
    }, [])

    return (
        <ul className={styles.produto}>
            {/* o map serve para retornar sobre um lista e criar elementos para cada item */}
            {produto.map((produto) => (
                <li key={produto.id} className={styles.item}>
                    
                    <h2>{produto.nome}</h2>
                    <p>R${produto.preco}</p>
                    <p>Descrição: {produto.descricao}</p>
                </li>
            ))}
        </ul>

    )
}

export default Produto