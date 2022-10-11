export default function FactoryDailyActivity(data){
    const newData = data.map(({ day, kilogram, calories }) => (
        {
            day:parseInt(day.substring(8)),
            kilogram:kilogram,
            calories:calories
        }
    ))
    return newData
}
