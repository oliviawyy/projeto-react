import { useState, useEffect } from "react";
import styles from "./ConsultaApiBtn.module.css";
import Swal from 'sweetalert2'

function ConsultaApiBtn() {

    // estado para renderizae=r os usuarios no viewport
    const [usuarios, setUsuarios] = useState([]);

    // inciamos como false para evitar o texto "Carregando..." antes da ação do usuário
    const [carregando, setCarregando] = useState(false);

    // estado tratar o erro
    const [erro, setErro] = useState("");

    // sweetalert2
    const Swal = require('sweetalert2');

    // a busca é um manipulador de eventos (event handler).
    // ele garante previsibilidade
    async function buscarUsuarios() {
        // resetamos os estados para preparar a interfae para uma nova requisição limpa
        setCarregando(true);
        setErro("");

        try {
            // Url para simular um erro interno do servidor (401 e 500)
            // const resposta = await fetch("https://httpbin.org/status/401");

            // consultar a API utilizando o metodo fetch --> resposta é uma promisse
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(resposta)

            if (!resposta.ok) {

                // tratar erro interno do servidor (500)
                if (resposta.status === 500) {
                    throw new Error("Erro 500: O banco de dados ou servidor falhou.");
                }

                // tratar erro 401 (falta de autenticação)
                if (resposta.status === 401) {
                    throw new Error("Erro 401: Usuário não autorizado.");
                }

                // tratar erro HTTP do servidor (URL 404)
                throw new Error(`Erro ${resposta.status}: URL não encontrada ou inválida.`);

            }

            // converter a resposta da API em json (ela erra uma promisse)
            const dados = await resposta.json();
            setUsuarios(dados);
        }


        catch (error) {
            console.log(error.message)
            if (error.message === "Failed to fetch" || !navigator.onLine) {

                setErro("Não foi possível concectar ao servidor. Verifique sua internet.");


            }
            else {
                setErro(error.message);
            }
        }
        finally {
            setCarregando(false);
        }

    }

    return (
        <main className={styles.container}>

            <h1 className={styles.titulo}>Consulta API</h1>

            <section className={styles.card}>

                <button
                    className={styles.buscarButton}
                    onClick={buscarUsuarios}
                    disabled={carregando}
                >
                    {carregando ? "Buscando..." : "Consultar"}
                </button>

                <h2>Usuários da JSON Placeholder</h2>

                {/* exibe mensagem de carregamento */}
                {carregando && Swal.fire({
                    title: "Sucesso!",
                    text: "Usuários carregados com sucesso.",
                    icon: "success"
                })

}

                {/* exibe mensagem de erro */}
                {erro && <p className={styles.erro}>{erro}</p>}

                {/* exibe a lista de usuários */}
                {!carregando && !erro && (
                    <ul className={styles.lista}>
                        {usuarios.map((usuario) => (
                            <li key={usuario.id} className={styles.item}>
                                <h3>{usuario.name}</h3>
                                <p>
                                    <strong>E-mail</strong> {usuario.email}
                                </p>
                                <p>
                                    <strong>Cidade:</strong> {usuario.address.city}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}


            </section>
        </main>
    )
}

export default ConsultaApiBtn