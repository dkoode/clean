//@ts-nocheck
'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import Link from "next/link";

export default function MobileSidebar() {
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger>
                    <Menu />
                </SheetTrigger>
                <SheetContent className="bg-sky-600 border-0">
                    <nav className="flex flex-col h-full">
                        <ul className="flex gap-x-4 bg-sky-600 flex-col justify-center items-center gap-y-4 h-full">
                            <li>
                                <a href="#hakkimizda" className="text-white text-xl font-medium">Hakkımızda</a>
                            </li>
                            <li>
                                <a href="#hizmetler" className=" text-white text-xl font-medium">Hizmetler</a>
                            </li>
                            <li className="">
                                <a href="#iletisim" className="text-white text-xl font-medium">İletişim</a>
                            </li>
                            <li className="">
                                <a href="#iletisim" className="text-white text-xl font-medium text-nowrap">Teklif Al</a>
                            </li>
                        </ul>
                        <div className="absolute hidden md:flex -top-8 right-0">
                            <Link href="tel:05322222222" className="flex  items-center gap-2 text-nowrap text-sky-900 text-base font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                Hemen Teklif Alın!
                            </Link>
                        </div>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}