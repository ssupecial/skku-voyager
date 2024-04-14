import { Box, Stack, VStack, Text, Image } from "@chakra-ui/react";

interface ISpotProps{
    pk: number;
    name: string;
    image: string;
    description: string;
    theme: string;
    index: number;
}

export default function SpotDetail({name, image, description, theme, index}:ISpotProps){
    return (
        <Box mt={8} border={"2px"} rounded={"3xl"} width={"100%"} key={index}>
            <Stack rounded={"3xl"} overflow={"hidden"} alignItems={"center"} direction={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
            }} >
                <Box width={{
                    base: "100%",
                    lg: "40%",
                    md: "50%",
                    sm: "100%",
                }} height={{
                    base: "30vh",
                    sm: "30vh",
                    md: "50vh",
                    lg: "50vh"
                }}>
                    <Image width={"100%"} height={"100%"} src={image} />
                </Box>
                <VStack width={{
                    sm: "100%",
                    md: "50%",
                    lg: "60%",
                }} spacing={2} align={"start"} padding={{
                    lg: 8,
                    md: 6,
                    sm: 4,
                    base: 4,
                }}>
                    <Text rounded={"3xl"} p={2} fontSize={{
                        base: "large",
                        sm: "large",
                        md: "x-large",
                        lg: "x-large",
                    }} display={"inline"} bg={"green.400"} objectFit={"cover"}>
                        {theme}
                    </Text>
                    <Text fontSize={{
                        base: "x-large",
                        sm: "x-large",
                        md: "xx-large",
                        lg: "xx-large",
                    }} mb={3}>
                        {index+1}.{name}
                    </Text>
                    <Text fontSize={{
                        base: "medium",
                        sm: "medium",
                        md: "large",
                        lg: "large",
                    }}>
                        {description}
                    </Text>
                </VStack>
            </Stack>
        </Box>
    )
};