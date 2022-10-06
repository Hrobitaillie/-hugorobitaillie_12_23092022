export default function FactoryDailyActivity(data){
    console.log("data:");
    console.log(data);
    const newData = data.map(({ day, kilogram, calories }) => (
        
        {
            day:parseInt(day.substring(8)),
            kilogram:kilogram,
            calories:calories
        }
    ))
    return newData
}
