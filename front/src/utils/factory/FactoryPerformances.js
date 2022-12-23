/** 
 * Translate subjects and create new array with subject -> value.
 * Inverse array to match mockup design
 * 
 * @param { Objects } data - data that will be transformed
 * @param { Objects } kind - data that will be transformed
 * 
 * @returns { number } kindID
 * @returns { string } subject
 * @returns { array } newdata -> array of all subject and value
 */
export default function FactoryPerformances({ data, kind }) {
    const FactorizedKind = Object.entries(kind).map((kindValue) => {
        const frenchSubject = (value) => {
            switch (value) {
                case "cardio":
                    return "Cardio";
                case "energy":
                    return "Energie";
                case "endurance":
                    return "Endurance";
                case "strenght":
                    return "Force";
                case "speed":
                    return "Vitesse";
                case "intensity":
                    return "Intensité";
                default:
                    return value;
            }    
            }
        return(
            {
                kindID: +kindValue[0],
                subject: frenchSubject(kindValue[1]),
            }
        )
        });

    const newdata = data.map((dataItem,i)=>{
        const temp = FactorizedKind.find(element=> element.kindID === dataItem.kind)
        if(temp.subject) {
            dataItem.subject = temp.subject;
        }
        return dataItem;
    })

    return newdata.reverse();
}
