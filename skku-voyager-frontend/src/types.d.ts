export interface ICountry{
    pk: number;
    name: string;
    thumbnail: string;
    flight_hour: number;
    flag: string;
};


export interface ISpot{
    pk: number;
    name: string;
    image: string;
    description: string;
    theme: string;
};


interface IPhoto{
    pk: number;
    file: string;
    description: string;
};

interface ICountryDetail{
    "pk": number;
    "name": string; 
    "thumbnail" :string; 
    "flight_hour": number; 
    "flag": string;
    "description": string;
    "good_month": string;
    "language": string;
    "theme": string;
    "rating": number;
    "avg_flight_price": number;
    "photos": IPhoto[];
    "spots": ISpot[];
};