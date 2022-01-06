import { UT } from './weather';

export interface Forecast{
    Temperature: {
        Minimum: UT,
        Maximum: UT,
    },
    Day: {
        Icon: number,
        IconPhrase: string,
    },
    Night: {
        Icon: number,
        IconPhrase: string,
    },
}

export interface ForecastData{
    DailyForecasts:Forecast[]
}