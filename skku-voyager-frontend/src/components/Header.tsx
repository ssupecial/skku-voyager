import { Text, Box, Button, HStack, IconButton, LightMode, Stack, useColorMode, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header(){
    const { isOpen: isLoginOpen, onClose: onLoginClose, onOpen: onLoginOpen} = useDisclosure();
    const { isOpen: isSignUpOpen, onClose: onSignUpClose, onOpen: onSignUpOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const logoColor = useColorModeValue("green.500", "green.200");
    const Icon = useColorModeValue(FaMoon, FaSun)
    console.log("This is Header");
    return (
        <Stack py={"5"} px={"40"} 
            spacing={{
                sm:3,
                md:0,
                base: 0,
            }}
            pl={5}
            pr={5}
            borderBottomWidth={1} 
            alignItems={"center"}
            justifyContent={"space-between"} 
            direction={{
                base: "column",
                sm:"column",
                md:"column",
                lg: "row",
            }}>
            <Link to={`/`}>
                <Box color={logoColor}>
                    <MdOutlineTravelExplore size={"48"}/>
                </Box>
            </Link>
            
            <Link to={`/`}>
                <Box>
                    <Text as='b' fontSize={{
                        lg: "xxx-large",
                        sm: "large"
                    }}>
                        SKKU VOYAGER
                    </Text>
                </Box>
            </Link>
            
            <HStack spacing={2}>
                <IconButton onClick={toggleColorMode} 
                    variant={"ghost"} 
                    aria-label="Toggle Dark Mode" 
                    icon={<Icon />}/>
                <Button onClick={onLoginOpen}>Log in</Button>
                <LightMode>
                    <Button onClick={onSignUpOpen} colorScheme="green">Sign up</Button>
                </LightMode>
            </HStack>
            <LoginModal isOpen={isLoginOpen} onClose={onLoginClose}/>

            <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose}/>
        </Stack>
    )
}