import Image from "next/image";
import Link from "next/link";
import badge from '../img/badge.png'
import logo from '../img/logo.png'
import whatsapp from '../img/whatsapp.png'
import { PhoneCall, MapPin, Clock8 } from 'lucide-react';

export default function NavBar() {
    return (
        <div className="flex flex-col">
            <div className="bg-slate-200 py-2 ">
                <div className={"flex items-center justify-start gap-x-6 mx-auto container"}>
                    <div className="flex items-center md:border-r-[1px] border-r-slate-300 pr-5">
                        <p className="text-base flex items-center gap-x-2">
                            <Clock8 className="text-sky-700" />
                            <b>Çalışma Saatlerimiz: </b>
                            09:00 - 18:00
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Link href="#">
                            <p className="text-base flex items-center gap-x-2">
                                <Image src={whatsapp} width={30} />
                                <b>Whatsapp iletişim</b>
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-8 container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image src={logo} className="relative" alt="logo" width={200} />
                </Link>
                <div className="flex items-center">
                    <div className="flex items-center gap-x-4 border-r-[1px] pr-4 border-r-sky-900">
                        <PhoneCall size={44} className="text-sky-900" strokeWidth={1} fill="#0c4a6e" />
                        <div className="flex flex-col">
                            <p className="text-sky-900 text-lg font-semibold">Bizi Arayın!</p>
                            <Link href="tel:05322222222" className="text-sky-900 text-base font-medium">0532 222 22 22</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pl-4">
                        <MapPin size={44} className="text-sky-900" strokeWidth={2} />
                        <div className="flex flex-col">
                            <p className="text-sky-900 text-lg font-semibold">Adresimiz</p>
                            <Link href="tel:05322222222" className="text-sky-900 text-base font-medium">Örnek mahalle, örnek semt, no:15</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 bg-sky-600">
                <nav className="container mx-auto md:grid md:grid-cols-3 flex justify-between items-center relative">

                    <ul className="flex gap-x-4 justify-start">
                        <li>
                            <a href="#hizmetler" className="text-white text-lg font-medium">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="#hizmetler" className="border-l-[1px] border-l-sky-500 pl-4 text-white text-lg font-medium">Hizmetler</a>
                        </li>
                        <li className="border-l-[1px] border-l-sky-500 pl-4">
                            <a href="#iletisim" className="text-white text-lg font-medium">İletişim</a>
                        </li>
                        <li className="border-l-[1px] border-l-sky-500 pl-4">
                            <a href="#iletisim" className="text-white text-lg font-medium">Teklif Al</a>
                        </li>
                    </ul>
                    <div className="absolute hidden md:flex -top-7 right-0">
                        <Image src={badge} className="relative" alt="badge" width={250} />
                        <Link href="tel:05322222222" className="flex items-center gap-2 text-nowrap text-sky-900 text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Hemen Teklif Alın
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
