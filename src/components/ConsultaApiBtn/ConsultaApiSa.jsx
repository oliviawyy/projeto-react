import { useState, useEffect } from "react";
import styles from "./ConsultaApiBtn.module.css";
import Swal from 'sweetalert2'

function ConsultaApiSa() {

    // estado para renderizae=r os usuarios no viewport
    const [usuarios, setUsuarios] = useState([]);

    // inciamos como false para evitar o texto "Carregando..." antes da ação do usuário
    const [carregando, setCarregando] = useState(false);

    // estado tratar o erro
    const [erro, setErro] = useState("");



    // a busca é um manipulador de eventos (event handler).
    // ele garante previsibilidade
    async function buscarUsuarios() {
        // resetamos os estados para preparar a interfae para uma nova requisição limpa
        setCarregando(true);
        setErro("");

        Swal.fire({
            title: "Carregando...",
            text: "Seus dados estão sendo carregados",
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            }
        });

        try {
            // Url para simular um erro interno do servidor (401 e 500)
            // const resposta = await fetch("https://httpbin.org/status/500");

            // consultar a API utilizando o metodo fetch --> resposta é uma promisse
            const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(resposta)

            if (!resposta.ok) {

                // tratar erro interno do servidor (500)
                if (resposta.status === 500) {

                    throw new Error("Erro 500: O banco de dados o servidor falhou")
                }
                if (resposta.status === 401) {

                    throw new Error("Erro 401: Usuário não autorizado.")
                }
                throw new Error(`Erro ${resposta.status}: URL não encontrada o inválida`)
            }
            // converter a resposta da API em json (ela erra uma promisse)
            const dados = await resposta.json();
            setUsuarios(dados);

            Swal.fire({
                title: "Sucesso",
                text: "Seus dados foram carregados com sucesso",
                icon: "success"
                
            });

            Swal.close();

        } catch (error) {
            if (error.message === "Failed to fetch" || !navigator.onLine) {
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado!",
                    text: "Não foi possível conectar ao servidor. Verifique sua conexão de internet.",
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Tentar Novamente'

                }).then((result) => {
                    if(result.isConfirmed ){
                        buscarUsuarios()
                    }
                })
                
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Algo deu errado!",
                    text: error.message,
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: 'Tentar Novamente'
                }).then((result) => {
                    if(result.isConfirmed ){
                        buscarUsuarios()
                    }
                })
                
            }


        }
        finally {

            setCarregando(false)
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


export default ConsultaApiSa