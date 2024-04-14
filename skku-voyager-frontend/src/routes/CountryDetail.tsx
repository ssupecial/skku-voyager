import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Country from "../components/Country";
import { Image, Box, Grid, GridItem, Heading, Text, VStack, useColorMode, useColorModeValue, HStack, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { ICountryDetail, IPhoto, ISpot } from "../types";
import SpotDetail from "../components/SpotDetail";



export default function CountryDetail(){
    const {countryPk} = useParams();
    const { colorMode, toggleColorMode } = useColorMode();
    const fontColor = useColorModeValue("black", "white");
    const greenFontColor = useColorModeValue("green.600", "green.300");

    const [isLoading, setIsLoading] = useState(true);
    const [country, setCountry] = useState<ICountryDetail>();

    const fetchCountry = async() => {
        const response = await fetch(`http://127.0.0.1:8000/api/countries/${countryPk}`);
        const json = await response.json();
        setCountry(json);
        setIsLoading(true);
    }
    useEffect(() => {
        fetchCountry();
    }, []);

    
    return(
        <Box mt={10} mb={10} px={{
            base:10,
            lg:40,
        }}>
            <Heading fontSize={"xxx-large"} >
                {country?.name}
            </Heading> 
            <Grid rounded={"xl"} overflow={"hidden"} mt={8} height={{
                lg: "60vh",
                base: "200vh",
            }} templateRows={{
                lg: "1fr 1fr",
                md: "1fr",
                sm: "1fr",
            }} templateColumns={{
                lg: "repeat(4, 1fr)",
            }} gap={2}>
                {[0,1,2,3,4].map((index) =>
                <GridItem
                    colSpan={{
                        lg: index === 0 ? 2 : 1,
                    }}
                    rowSpan={{
                       lg: index === 0 ? 2 : 1,
                    }}
                    overflow={'hidden'} key={index}>
                        <Image objectFit={"cover"} w="100%" h="100%" src={`${process.env.REACT_APP_BACKEND_API}${country?.photos[index].file}`} />
                </GridItem>
                )}
            </Grid>
            <Text fontSize={"medium"} mt={1}>
                **Photos taken by me
            </Text>
            
            <Heading mt={10} fontSize={"xx-large"}>
                Description
            </Heading>
            <Text mb={10}>
                {country?.description}
            </Text>
            <Grid templateColumns={{
                lg: "1fr 1fr 1fr",
                md: "1fr 1fr",
                sm: "1fr",
            }} border={"2px"} rounded={"3xl"} alignItems={"center"} padding={10} rowGap={10} justifyContent={"center"}>
                <GridItem key={"good_month"}> 
                    <VStack justifyContent={"center"}>
                        <Heading fontSize={"xx-large"} textAlign={"center"}>
                            Best months to travel
                        </Heading>
                        <Text mt={1} fontSize={"x-large"} color={greenFontColor} textAlign={"center"}>
                            {country?.good_month}
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem key={"language"}> 
                    <VStack alignItems={"center"}>
                        <Heading fontSize={"xx-large"} textAlign={"center"}>
                            Language
                        </Heading>
                        <Text fontSize={"x-large"} color={greenFontColor} textAlign={"center"}>
                            {country?.language}
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem key={"theme"}> 
                    <VStack alignItems={"center"}>
                        <Heading fontSize={"xx-large"} textAlign={"center"}>
                            Theme
                        </Heading>
                        <Text mt={1} fontSize={"x-large"} textAlign={"center"} color={greenFontColor}>
                            {country?.theme}
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem key={"avg_flight_price"}> 
                    <VStack align={"center"}>
                        <Heading fontSize={"xx-large"} textAlign={"center"}>
                            Avg Flight Price
                        </Heading>
                        <Text mt={1} fontSize={"x-large"} textAlign={"center"} color={greenFontColor}>
                            ${country?.avg_flight_price}
                        </Text>
                    </VStack>
                </GridItem>
                <GridItem key={"flag"}> 
                    <VStack>
                        <Heading fontSize={"xx-large"} textAlign={"center"}>
                            Flag
                        </Heading>
                        <Image width={"10vh"} src={country?.flag}/>
                    </VStack>
                </GridItem>
                <GridItem key={"rating"}>
                    <VStack alignItems={"center"}>
                        <Heading mt={5} fontSize={"xx-large"} textAlign={"center"}>
                            Rating
                        </Heading>
                        <HStack mt={1} alignItems={"center"}>
                            <Box color={"yellow.400"}>
                                <FaStar size={30}/>
                            </Box>  
                            <Text fontSize={"x-large"}>{country?.rating}</Text>
                        </HStack>
                    </VStack>
                    
                </GridItem>
            </Grid>

            <Heading mt={10} fontSize={"xx-large"}>
                Enjoy
            </Heading>
            {country?.spots.map((spot, index) =>
                <SpotDetail 
                    pk={spot.pk}
                    name={spot.name}
                    image={spot.image}
                    description={spot.description}
                    theme={spot.theme}
                    index={index}
                />
            )}
            
        </Box>
        
    )
}