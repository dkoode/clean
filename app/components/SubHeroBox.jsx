export default function SubHeroBox({ title, icon, desc }) {
    return (
        <div>
            <div className="flex flex-col rounded-lg bg-yellow-300 items-center  gap-y-2 p-4">
                <div className="w-[60px] h-[60px] rounded-full border-4 border-sky-700 bg-sky-600 flex items-center justify-center">
                    {icon}
                </div>
                <div>
                    <h3 className="font-bold pt-2 text-sky-800">
                        {title}
                    </h3>
                </div>
            </div>
            <div className="mt-2 bg-slate-100 p-4 rounded-lg ">
                <p className="text-sm text-sky-900 ">
                    {desc}
                </p>
            </div>
        </div>
    )
}