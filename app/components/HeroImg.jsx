import Link from "next/link"
import Image from "next/image"
import slider from '../img/slide.jpg'

export default function HeroImg() {
    return (
        <div className="relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col md:px-0 px-5">
                <h3 className="md:text-6xl text-5xl text-center leading-normal font-bold   text-white ">Temizliğin MÜJDESİ</h3>
                <p className="text-3xl md:text-5xl font-semibold text-yellow-300 leading-normal text-center">
                    Evinizin Müjdesi
                </p>
            </div>
            <Image src={slider} className="w-full object-cover OBJECT-TOP h-[71vh]" />
        </div>
    )
}