export default function BlockKeyData({ data }){
    return(
        <div className="w-full aspect-[129/62] bg-light p-8 rounded flex items-center gap-6">
            <img src={data.keyDataIcon} alt={"image " +data.keyDataName}/>
            <div>
                <p className="text-xl font-bold ">{data.keyDataValue}{data.keyDataUnit}</p>
                <p className=" text-sm font-medium text-[#74798C]">{data.keyDataName}</p>
            </div>
        </div>
    )
}