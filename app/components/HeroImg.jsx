import Link from "next/link"
import Image from "next/image"
import slider from '../img/slide.jpg'

export default function HeroImg() {
    return (
        <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
                <h3 className="text-6xl text-center leading-normal font-bold   text-white ">Temizliğin MÜJDESİ</h3>
                <p className="text-5xl font-semibold text-yellow-300">
                    Evinizin Müjdesi
                </p>
            </div>
            <Image src={slider} className="w-full object-cover OBJECT-TOP h-[71vh]" />
        </div>
    )
}