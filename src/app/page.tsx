import Link from "next/link";
import Image from "next/image";
import TopCoursesContainer from "./components/TopCoursesContainer"; 
export default function Home() {
  return (
    <>
      <Link href="/promo"> <Image src="/banner.webp" alt="Banner" width={1280} height={100} className="bannerImg"></Image></Link>
      <TopCoursesContainer />
    </>
  );
}