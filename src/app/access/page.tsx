import Login from "../components/Login";
import Register from "../components/Register";

export default function AccessPage(){
    return (
        <div style={{background: "linear-gradient(to right, #add8e6, #87cefa", display:"flex", flexDirection:"row-reverse", alignItems:"center", justifyContent:"space-evenly"}}>
         <Login/>
         <Register />
        </div>
    );
}