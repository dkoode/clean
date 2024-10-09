import Image from "next/image";
import Link from "next/link";
import badge from '../img/badge.png'
import logo from '../img/logo.png'
import whatsapp from '../img/whatsapp.png'
import { PhoneCall, MapPin, Clock8 } from 'lucide-react';
import MobileSidebar from "./MobileSidebar";

export default function NavBar() {
    return (
        <div className="flex flex-col">
            <div className="bg-slate-200 py-2 ">
                <div className={"flex md:flex-row flex-col gap-y-2 px-2 md:px-0 md:items-center justify-start gap-x-6 mx-auto container"}>
                    <div className="flex items-center md:border-r-[1px] border-r-slate-300 pr-5">
                        <p className="flex items-center gap-x-2 text-sm">
                            <Clock8 className="text-sky-700"  size={20}/>
                            <b className="text-sky-900">Çalışma Saatlerimiz: </b>
                            09:00 - 18:00
                        </p>
                    </div>
                    <div className="flex items-center">
                        <Link href="#">
                            <p className="text-sm flex items-center gap-x-2">
                                <Image src={whatsapp} width={20} />
                                Whatsapp iletişim
                            </p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="pt-6 pb-8 container mx-auto flex flex-row md:px-0 px-5 md:flex-row gap-y-3 items-center justify-between">
                <Link href="/">
                    <Image src={logo} className="relative" alt="logo" width={200} />
                </Link>
                <MobileSidebar/>
                <div className="md:flex hidden items-center md:flex-row flex-col ">
                    <div className="flex items-center gap-x-4 border-r-[1px] pr-4 border-r-sky-900">
                        <PhoneCall size={34} className="text-sky-900" strokeWidth={1} />
                        <div className="flex flex-col">
                            <p className="text-sky-900 text-base font-semibold">Bizi Arayın!</p>
                            <Link href="tel:05322222222" className="text-sky-900 text-sm font-medium">0532 222 22 22</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pl-4">
                        <MapPin size={34} className="text-sky-900" strokeWidth={2} />
                        <div className="flex flex-col">
                            <p className="text-sky-900 text-base font-semibold">Adresimiz</p>
                            <Link href="tel:05322222222" className="text-sky-900 text-sm font-medium">Örnek mahalle, örnek semt, no:15</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-5 bg-blue-500 hidden md:block" >
                <nav className="container mx-auto md:grid md:grid-cols-3 flex justify-between items-center relative">

                    <ul className="flex gap-x-4 justify-start">
                        <li>
                            <a href="#hakkimizda" className="text-white text-base font-medium">Hakkımızda</a>
                        </li>
                        <li>
                            <a href="#hizmetler" className="border-l-[1px] border-l-sky-500 pl-4 text-white text-base font-medium">Hizmetler</a>
                        </li>
                        <li className="border-l-[1px] border-l-sky-500 pl-4">
                            <a href="#iletisim" className="text-white text-base font-medium">İletişim</a>
                        </li>
                        <li className="border-l-[1px] border-l-blue-400 pl-4">
                            <a href="#iletisim" className="text-white text-base font-medium text-nowrap">Teklif Al</a>
                        </li>
                    </ul>
                    <div className="absolute hidden md:flex -top-8 right-0">
                        <Image src={badge} className="relative" alt="badge" width={250} />
                        <Link href="tel:05322222222" className="flex  items-center gap-2 text-nowrap text-sky-900 text-base font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            Hemen Teklif Alın!
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
