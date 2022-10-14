export default function BlockKeyData({ data }){
    return(
        <section id="KeyDatas" className="xl:w-full min-w-[200px] aspect-[129/62] bg-light xl:p-8 p-4 rounded flex items-center xl:gap-6 gap-4">
            <img src={data.keyDataIcon} alt={"image " +data.keyDataName} className=" w-12"/>
            <div>
                <p className=" xl:text-xl text-lg font-bold ">{data.keyDataValue}{data.keyDataUnit}</p>
                <p className=" xl:text-sm text-xs font-medium text-[#74798C]">{data.keyDataName}</p>
            </div>
        </section>
    )
}