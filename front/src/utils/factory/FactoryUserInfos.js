export default function getUserId(data){
    const UserId = data.id
    return UserId
}
export function getUserScore(data){
    const UserScore = data.score
    return UserScore
}
export function getUserAge(data){
    const UserAge = data.userInfos.age
    return UserAge
}
export function getUserFirstname(data){
    const UserFirstname = data.userInfos.firstName.charAt(0).toUpperCase() + data.userInfos.firstName.slice(1);
    return UserFirstname
}
export function getUserLastName(data){
    const LastName = data.userInfos.lastName.charAt(0).toUpperCase() + data.userInfos.lastName.slice(1);
    return LastName
}
export function FormatUserKeyData(data){
    const UserKeyData = data.keyData
    const SortedKeyData = Object.entries(UserKeyData).map((key) =>{
        switch (key[0]) {
            case "calorieCount":
                return ({
                    keyDataName:"Calories",
                    keyDataValue:Intl.NumberFormat("en").format(key[1]),
                    keyDataUnit:'kCal',
                    keyDataColor:"#FF0000",
                    keyDataIcon: "/img/calories-icon.svg"
                    
                })
            case "proteinCount":
                return ({
                    keyDataName:"Protéines",
                    keyDataValue:Intl.NumberFormat("en").format(key[1]),
                    keyDataUnit:'g',
                    keyDataColor:"#4AB8FF",
                    keyDataIcon: "/img/protein-icon.svg"
                    
                })
            case "carbohydrateCount":
                return ({
                    keyDataName:"Glucides",
                    keyDataValue:Intl.NumberFormat("en").format(key[1]),
                    keyDataUnit:'g',
                    keyDataColor:"#FDCC0C",
                    keyDataIcon: "/img/carbs-icon.svg"
                    
                })
            case "lipidCount":
                return ({
                    keyDataName:"Lipides",
                    keyDataValue:Intl.NumberFormat("en").format(key[1]),
                    keyDataUnit:'g',
                    keyDataColor:"#FD5181",
                    keyDataIcon: "/img/fat-icon.svg"
                })
            default:
                return null;
        }
       
    })
    return SortedKeyData
}