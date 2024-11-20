import Image from "next/image";
import LoginButton from "./LoginButtonComponent";
import Link from "next/link";

interface data {
  name: string;
  imagePath: string;
  width: number;
  height: number;
  rating: number;
  description: null | string;
}
export default function Course(data: data) {
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginLeft:"20px", marginRight:"20px", width:"400px", marginBottom:"20px"}}>
    <div>
      <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
      <b><h1>{data.name}</h1></b>
        <Image
          src={data.imagePath}
          width={data.width}
          height={data.height}
          alt={data.name}

        />
        
      </div>
      <p style={{textAlign:"justify", marginBottom:"5px",marginTop:"10px"}}>{data.description}</p>
      <p style={{marginBottom:"20px",textAlign:"center"}}>Nota: {data.rating}/5 ⭐</p>
    </div>
    <Link href="/"><LoginButton text="Comprar"/></Link>

    </div>
  );
}
