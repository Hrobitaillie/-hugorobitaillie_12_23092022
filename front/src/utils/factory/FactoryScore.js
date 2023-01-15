/** 
 * Transform score to percentage
 * 
 * @param { array } data - score data that will be transformed
 * 
 * @returns { number } scoreValue
 */
export default function FactoryScore(data){
    let scoreValue = 0;
    scoreValue = Math.ceil(data[0].value)
    
    return scoreValue
}