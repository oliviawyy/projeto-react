import styles from "./card.module.css"

 function Card (aluno="Nenhum", curso="nenhum", nome="nenhum"){
    return(
        <div className={styles.card}>
        <img className={styles.img_aluno} src="https://placehold.co/400" alt={aluno} />
        <h1 className={styles.cardTitle}>Nome: {nome}</h1>
        <p className={styles.cardText}>Curso: {curso}</p>
        </div>
    )
}





export default Card