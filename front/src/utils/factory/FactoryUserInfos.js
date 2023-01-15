/** 
 * Get user today score and format the data to be displayed
 * 
 * @param { array } data - score data that will be formated
 * 
 * @returns { array } UserScore
 */
export function getUserScore(data){
    const UserScore = [{
        value: data.todayScore * 100,
        fill: "#FF0000",
        name: "Score",
      }];
    return UserScore
}

/** 
 * Get user firstname and format it to be displayed
 * 
 * @param { array } data - data where user firstname is stored
 * 
 * @returns { string } UserFirstname
 */
export function getUserFirstname(data){
    const UserFirstname = data.userInfos.firstName.charAt(0).toUpperCase() + data.userInfos.firstName.slice(1);
    return UserFirstname
}

/** 
 * Get user key data and format it to be displayed
 * 
 * @param { array } data - data where user keys are stored
 * 
 * @returns { array } SortedKeyData
 */
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