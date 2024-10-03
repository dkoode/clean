import Link from "next/link"
import Image from "next/image"
import slider from '../img/slide.jpg'

export default function HeroImg (){
    return(
        <div>
            <Image src={slider} className="w-full object-cover OBJECT-TOP h-[71vh]"/>
        </div>
    )
}