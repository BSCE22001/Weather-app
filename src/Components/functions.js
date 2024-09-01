export function wind_direction(params) {
    if (params) {

        let wind = '';
        switch (params[0]) {
            case "N":
                wind = "North";
                break;
            case "E":
                wind = "East";
                break;
            case "W":
                wind = "West";
                break;
            case "S":
                wind = "South";
                break;
            default:
                wind = "Unknown";
                break;
        }
        wind = wind + " to ";
        switch (params[1]) {
            case "N":
                wind += "North";
                break;
            case "E":
                wind += "East";
                break;
            case "W":
                wind += "West";
                break;
            case "S":
                wind += "South";
                break;
            default:
                wind += "Unknown";
                break;
        }
        return wind;
    }
}