import { Box, VStack, Image, Text, extendTheme, Grid, HStack, useColorMode, useColorModeValue, Stack } from "@chakra-ui/react";
import { ImAirplane } from "react-icons/im";
import { Link } from "react-router-dom";


interface CountryProps{
    name: string; 
    thumbnail :string; 
    flightHour: number; 
    flag: string;
    pk:number;
};

export default function Country({pk, name, thumbnail, flightHour, flag,}:CountryProps){
    const { colorMode, toggleColorMode } = useColorMode();
    const fontColor = useColorModeValue("black", "white");
    const borderColor = useColorModeValue("gray.500", "white");
    
    return (
        <Link to={`/countries/${pk}`}>
            <Box position={"relative"} border={"2px"} borderColor={borderColor} rounded={"3xl"} height={{
                base: "40vh",
                md: "30vh",
            }} width={"100%"}>
                <Stack rounded={"3xl"} overflow={"hidden"} position={"relative"} height={"100%"} width={"100%"} alignItems={"center"} direction={{
                    base: "column",
                    md: "row",
                }}>
                    <Box width={{
                        base: "100%",
                        md: "50%"
                    }} height={{
                        base: "50%",
                        md: "100%"
                    }}>
                        <Image src={thumbnail} width={"100%"} height={"100%"}/>
                    </Box>
                    <Box width="50%" height={{
                        base: "50%",
                        md: "100%"
                    }} display={"flex"} alignItems={"center"} justifyContent={"center"} p={0}>
                        <VStack align={"center"}>
                            <Text fontSize={{
                                base: "xx-large",
                                md: "xxx-large"
                            }} color={fontColor} as={"b"} textAlign={"center"}>
                                {name}
                            </Text>
                            <HStack mt="2">
                                <ImAirplane size={20}/>
                                <Text color={fontColor} fontSize={{
                                    base: "medium",
                                    md: "x-large"
                                }}>
                                    From South Korea : {flightHour}h
                                </Text>
                            </HStack>
                            
                        </VStack>
                    </Box>
                </Stack>
            <Box position={"absolute"} bottom={5} right={5}>
                <Image rounded={"xl"} width={{
                    base: "50px",
                    md: "80px"
                }} height={{
                    base: "35px",
                    md: "50px",
                }} src={flag}/>
            </Box>
        </Box>
        </Link>
        
    )
}

