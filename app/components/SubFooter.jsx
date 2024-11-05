import Link from "next/link";

export default function SubFooter() {
    return (
        <section id="iletisim" className="bg-yellow-300 w-full py-10">
            <div className="container mx-auto flex items-start flex-col gap-y-5 md:items-start md:justify-center px-5">
                <h5 className="md:text-2xl text-xl text-center font-bold text-sky-900">
                    İhtiyaçlarınıza yönelik en uygun hizmeti almak için bizim iletişime geçin!
                </h5>
                <div className="flex w-full flex-col md:flex-row  space-y-3 md:space-y-0 md:gap-x-5 items-center">
                    <Link href="https://wa.me/905434718834?text=Merhaba,bilgi almak istiyorum." className="py-4 px-6 rounded-lg w-full md:max-w-max bg-white text-center text-base md:text-lg font-semibold text-sky-900">Whatsapp İletişim Hattı</Link>
                    <Link href="tel:+905434718834" className="py-4 px-6 w-full rounded-lg bg-sky-500 md:max-w-max text-base md:text-lg text-center font-semibold text-white">Bizi Arayın</Link>
                </div>
            </div>
        </section>
    )
}