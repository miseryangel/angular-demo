export interface UT{
    Value: number,
    Unit: string,
    UnitType: number
}

export interface Weather{
    LocalObservationDateTime: string,
    EpochTime: string,
    WeatherText: string,
    WeatherIcon:number,
    HasPrecipitation: boolean,
    PrecipitationType: null,
    IsDayTime: boolean,
    Temperature: {
        Metric: UT,
        Imperial: UT
    },
    MobileLink: string,
    Link: string,
}






