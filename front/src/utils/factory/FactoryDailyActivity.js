/** 
 * Transform datas top match with visual format
 * 
 * @param { Object[] } data - data that will be transformed
 * 
 * @returns { string } day
 * @returns { string } kilogram
 * @returns { string } calories
 */

export default function FactoryDailyActivity(data){
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
