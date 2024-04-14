import { Box, VStack, Image, Text, extendTheme, Grid, useColorMode, useColorModeValue } from "@chakra-ui/react";
import '../css/App.css';
import Country from "../components/Country";
import { useQuery } from "@tanstack/react-query";
// import { getCountries } from "./api";
import { useEffect, useState } from "react";
import MainIntroduce from "../components/MainIntroduce";


interface ICountry{
    "pk": number;
    "name": string; 
    "thumbnail" :string; 
    "flight_hour": number; 
    "flag": string;
}

export default function Home(){
    const { colorMode, toggleColorMode } = useColorMode();
    const fontColor = useColorModeValue("black", "white");
    
    // const { isLoading, data} = useQuery<ICountry[]>(["countries"], getCountries);

    const [isLoading, setIsLoading] = useState(true);
    const [countries, setCountries] = useState<ICountry[]>([]);
    const fetchCountries = async() => {
        const response = await fetch("http://127.0.0.1:8000/api/countries/");
        const json = await response.json();
        setCountries(json);
        setIsLoading(true);
    }
    useEffect(() => {
        fetchCountries();
    }, []);
    
    return (
        <VStack mb={20} align={"center"}>
            <MainIntroduce/>
            <Box mt="10">
                <Text mt={"10"} fontSize={{
                    base: "xx-large",
                    md: "xxx-large"
                }} color={fontColor} as={"b"} textAlign={"center"}>
                    List of Country
                </Text>
            </Box>
            <Grid 
                width={{
                    base: "85%",
                    md: "60%"
                }}
                templateColumns={"1fr"}
                mt={{
                    base: 10,
                    md: 15
                }} 
                rowGap={10}>
                    {countries.map((country) => (
                        <Country 
                            pk={country.pk}
                            name={country.name}
                            thumbnail={country.thumbnail}
                            flightHour={country.flight_hour}
                            flag={country.flag}
                        />
                    ))}
            </Grid>
        </VStack>
    )
}


