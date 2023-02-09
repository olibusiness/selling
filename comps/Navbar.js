import Image from "next/image"
export default function nav (){
    return(
            <a href='/'>
            <Image src="/dark.png" width={77} height={77}/>
         </a>
    )
}