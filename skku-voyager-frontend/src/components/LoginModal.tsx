import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaLock, FaUserNinja } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { useState } from "react";
// import session from "express-session";

interface LoginModalProps{
    isOpen: boolean;
    onClose:() => void;
}
export default function LoginModal({ isOpen, onClose}: LoginModalProps){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}login/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "username": username, "password": password}),
            });
            const json = await response.json();
            // alert(json.ok);

            if (json.success == "True"){
                alert(json.message);
            } else{
                alert(json.message);
            }
            
        }
        catch (error) {
            console.error('Registration error:', error);
        }
    }
    return (
        <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Log in</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color="gray.500">
                                            <FaUserNinja />
                                        </Box>}/>
                                    <Input variant={"filled"} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaLock />
                                        </Box>} />
                                    <Input variant={"filled"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </InputGroup>
                            </VStack>
                            <Button onClick={handleSubmit} mt={4} colorScheme="green" w="100%">Log in</Button>
                            <SocialLogin />
                        </ModalBody>
                        
                        
                    </ModalContent>
                </Modal>
    )
}