import Link from "next/link";
import Image from "next/image";
import subHeroImg from '../img/subhero.png'
import SubHeroBox from "./SubHeroBox";
import { Flower2, Smile, Users } from 'lucide-react';

export default function SubHero() {
    return (
        <section id="hakkimizda" className="container mx-auto">
            <div className="w-full py-20 gap-4 flex md:flex-row md:px-0 px-5 flex-col items-center">
                <div className="flex flex-col md:flex-row md:items-center">
                    <Image className="md:min-w-[350px] w-[200px]" src={subHeroImg} alt="Müjde Temizlik Hizmetleri" width={349} />
                </div>
                <div className="flex flex-col gap-y-2">
                    <span className=" text-sky-500 font-bold">
                        Hakkımızda
                    </span>
                    <h1 className="text-2xl text-sky-900 pb-2 font-bold">Profesyonel Ekip, 10 Senelik Tecrübe</h1>
                    <p className="font-normal text-base text-sky-900">
                        Müjde Temizlik, uzman ekibi ve kaliteli hizmet anlayışıyla İstanbul'un her köşesine ulaşan profesyonel temizlik çözümleri sunar. Evlerinizden iş yerlerinize, her alan için özenle tasarlanmış temizlik paketlerimizle, sağlıklı ve ferah bir ortam vaat ediyoruz. Müşteri memnuniyetini ön planda tutan hizmet anlayışımızla, sizlere güvenle hizmet veriyoruz.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 pt-3 gap-5">
                        <SubHeroBox title={"Profesyonel Ekip"} icon={<Users size={30} className="text-white"/>} desc={"Alanında deneyimli temizlik personelimiz, tüm detaylara özen göstererek ev ve ofislerinizi kusursuz bir şekilde temizler."}/>
                        <SubHeroBox title={"Çevre Dostu Ürünler"} icon={<Flower2 size={30} className="text-white"/>} desc="Sağlığınızı ve çevreyi koruyan, doğa dostu temizlik ürünleri kullanarak güvenli ve etkili temizlik hizmeti sağlıyoruz." />
                        <SubHeroBox title={"Müşteri Memnuniyeti"} icon={<Smile size={40} className="text-white"/>} desc="İhtiyaçlarınıza uygun esnek randevu saatleri ile dilediğiniz zaman diliminde temizlik hizmetlerimizden faydalanabilirsiniz." />
                    </div>
                </div>
            </div>

        </section>
    )
}