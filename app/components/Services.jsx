import Image from "next/image"
import img from '../img/nedenbiz.png'
export default function Services() {
    return (
        <section className="w-full bg-slate-100 py-20 relative">
            <Image src={img} alt="Müjde Temizlik" className="w-[300px] absolute right-0 bottom-0" />
            <div className="container mx-auto flex flex-col items-center justify-center">
                <h2 className="text-5xl text-sky-800">
                    Neden Biz?
                </h2>
                <p className="text-center max-w-[800px] pt-4 text-sky-900">
                    Müjde Temizlik olarak, müşteri memnuniyetini en üst seviyede tutan, kaliteli ve güvenilir temizlik hizmetleri sunuyoruz. Ev, ofis ve diğer yaşam alanlarınızın hijyenini sağlamak için profesyonel çözümler üretiyoruz.
                </p>
            </div>
            <div className="border-t-[1px] border-t-slate-200 mt-6 pt-4 pb-4 container mx-auto flex justify-center items-center flex-col">
                <div className="rounded-lg  py-4 px-5 w-[800px]">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-5  gap-y-6">
                        <li className="flex-col flex  gap-y-3">
                            <h4 className="text-xl font-bold text-sky-800">
                                Deneyimli ve Güvenilir Ekip
                            </h4>
                            <p className="text-sky-900 text-sm ">
                                Alanında uzman, güvenilir ve profesyonel temizlik ekibimizle, her işi titizlikle ve dikkatle tamamlıyoruz.
                            </p>
                        </li>
                        <li className="flex-col flex gap-y-3">
                            <h4 className="text-xl font-bold text-sky-800">
                                Kaliteli ve Doğa Dostu Ürünler
                            </h4>
                            <p className="text-sky-900 text-sm ">
                                Sağlığınızı koruyan, çevre dostu ve yüksek etkili temizlik ürünleri kullanarak, güvenli ve sağlıklı bir temizlik hizmeti sunuyoruz.
                            </p>
                        </li>
                        <li className="flex-col flex  gap-y-3">
                            <h4 className="text-xl font-bold text-sky-800">
                                Müşteri Odaklı Hizmet Anlayışı
                            </h4>
                            <p className="text-sky-900 text-sm ">
                                Her müşterimizin ihtiyaçlarına özel çözümler sunuyor ve memnuniyetinizi en ön planda tutuyoruz.
                            </p>
                        </li>
                        <li className="flex-col flex  gap-y-3">
                            <h4 className="text-xl font-bold text-sky-800">
                                Her Alanda Profesyonellik
                            </h4>
                            <p className="text-sky-900 text-sm ">
                                Ev temizliğinden ofis temizliğine, inşaat sonrası temizlikten taşınma öncesi temizliğe kadar geniş hizmet yelpazemizle her alanda uzmanız.
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
        </section>
    )
}