export default function FactoryAverageSessions(data){

    const sessionsData = data.sessions;
    console.log(sessionsData);
    const formatDate = (index) => {
        switch (index) {
            case 1:
                return "Lu";
            case 2:
                return "Ma";
            case 3:
                return "M";
            case 4:
                return "J";
            case 5:
                return "V";
            case 6:
                return "S";
            case 7:
                return "D";
            default:
                return null;
        }
    }
    const newSessionsData = sessionsData.map(({ day, sessionLength }) =>(
        {
            name : formatDate(day),
            value: sessionLength
        }
    ))

    return newSessionsData
}
