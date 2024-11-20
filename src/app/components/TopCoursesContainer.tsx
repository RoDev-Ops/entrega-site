import Image from "next/image";
import styles from "./TopCousesContainer.module.css";
export default function TopCoursesContainer() {
  return (
    <>
      <h1
        style={{
          position: "absolute",
          margin: "0",
          color: "white",
          fontSize: "30px",
          left: "50%",
          transform: "translateX(-50%)",
          fontWeight: "bolder",
          marginBottom: "100px",
        }}
      >
        Melhor Avaliados
      </h1>
      <div className={styles.container}>
        <div className={styles.coursesDiv}>
          <Image
            src="/curso1.jpeg"
            alt="curso 1"
            width={300}
            height={300}
            className={styles.courses}
          />
          <h1 className={styles.title}>
            Criando Dashboards e Storytelling de Dados
          </h1>
          <p className={styles.title} style={{ textAlign: "center" }}>
            Nota: 4.5/5 ⭐ <br />
            7230 avaliações
          </p>
        </div>

        <div className={styles.coursesDiv}>
          <Image
            src="/curso2.jpeg"
            alt="curso 2"
            width={300}
            height={300}
            className={styles.courses}
          />
          <h1 className={styles.title}>Introdução a Engenharia de Prompt</h1>
          <p className={styles.title} style={{ textAlign: "center" }}>
            Nota: 4.7/5 ⭐ <br />
            9402 avaliações
          </p>
        </div>

        <div className={styles.coursesDiv}>
          <Image
            src="/curso3.jpeg"
            alt="curso 2"
            width={300}
            height={300}
            className={styles.courses}
          />
          <h1 className={styles.title}>Investigando DataLakes</h1>
          <p className={styles.title} style={{ textAlign: "center" }}>
            Nota: 4.9/5 ⭐ <br />
            10000 avaliações
          </p>
        </div>

        <div className={styles.coursesDiv}>
          <Image
            src="/curso4.jpeg"
            alt="curso 2"
            width={300}
            height={300}
            className={styles.courses}
          />
          <h1 className={styles.title}>Aprendendo Soft Skills: Comunicação</h1>
          <p className={styles.title} style={{ textAlign: "center" }}>
            4.9/5 ⭐ <br/>
            3201 avaliações
          </p>
        </div>
      </div>
    </>
  );
}
