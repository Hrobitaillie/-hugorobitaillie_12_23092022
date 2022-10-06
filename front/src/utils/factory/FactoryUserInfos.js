export default function getUserId(data){
    const UserId = data.id
    return UserId
}
export function getUserKeyData(data){
    const UserKeyData = data.keyData
    return UserKeyData
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
