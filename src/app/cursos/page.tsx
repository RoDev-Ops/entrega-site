import Course from "../components/Course";
export default function coursesPage() {
    return (
        <div>
            
            <h1 style={{textAlign:"center",fontSize:'40px',}}>Cursos</h1>
            <div style={{display:"flex", justifyContent:"space-between",height:"600px"}}>
            <Course name={"Criando Dashboards e Storytelling de Dados"} imagePath={"/curso1.jpeg"} height={300} width={300} description={"Nesse curso você vai aprender a criar dashboards de qualidade para melhorar a qualidade dos seus insights e tomadas de decisão estratégicas"} rating={4.5} />
            <Course name={"Introdução a Engenharia de Prompt"} imagePath={"/curso2.jpeg"} height={300} width={300} description={"Domine a arte de criar prompts eficientes para interagir com modelos de IA, aprenda técnicas avançadas de comunicação e otimize seus resultados com inteligência artificial"} rating={4.7}/>
            <Course name={"Investigando DataLakes"} imagePath={"/curso3.jpeg"} height={300} width={300} description={"Aprenda a trabalhar com grandes volumes de dados em data lakes, explore técnicas de armazenamento, processamento e análise de dados não estruturados"} rating={4.9}/>
            <Course name={"Aprendendo Soft Skills: Comunicação"} imagePath={"/curso4.jpeg"} height={300} width={300} description={"Desenvolva habilidades essenciais de comunicação para o ambiente profissional, aprenda técnicas de apresentação, escuta ativa e comunicação assertiva"} rating={4.9}/>
            </div>
         
            <div style={{display:"flex", justifyContent:"space-between"}}>

            </div>


            
        </div>
    );
}