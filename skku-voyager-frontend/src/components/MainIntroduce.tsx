import { Box, Image, VStack, Text } from "@chakra-ui/react";

export default function MainIntroduce(){
    return(
        <Box
            width={"100%"} overflow={"hidden"} position={"relative"} backdropFilter="blur(4px)">
                <Box width={"100%"} overflow={"hidden"}>
                    <Image width="100%"
                    height={"900"} 
                    objectFit="cover" src={"https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=2774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}/>
                </Box>
                <Box position="absolute" top="0" left="0" right="0" bottom="0"  backgroundColor="rgba(0, 0, 0, 0.3)">
                    <VStack height="100%" alignItems="center" justifyContent={"center"}>
                        <Text mt={"0"} fontSize={{
                            base: "large",
                            md: "x-large"
                        }} color={"white"} as={"b"}>
                            Happiness - It's in travel
                        </Text>
                        <Text fontSize={{
                            lg: "100",
                            md: "70",
                            base: "50"
                            }} 
                            color={"white"} as="b" mt="0" >
                                Here's To Go
                            </Text>
                        <Text mt={"10"} 
                            fontSize={{
                                lg: "40",
                                md: "30",
                                sm: "20",
                                }} 
                            px={{
                                base: 5,
                            }}
                            color={"white"} as={"b"} textAlign={"center"}>
                            Introduce the travel destinations I have visited
                        </Text>
                        <Text mt={"0"} fontSize={{
                                lg: "40",
                                md: "30",
                                sm: "20",
                            }} 
                            px={{
                                base: 5,
                            }} color={"white"} as={"b"} textAlign={"center"} >
                            As all are places I have personally visited, I can provide vivid and honest information.
                        </Text>
                    </VStack>
                </Box>
        </Box>
    )};