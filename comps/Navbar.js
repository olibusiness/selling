import Image from "next/image"
import Link from "next/link"
export default function nav (){
    return(
            <Link href='/'>
            <Image src="/dark.png" width={77} height={77}/>
         </Link>
    )
}