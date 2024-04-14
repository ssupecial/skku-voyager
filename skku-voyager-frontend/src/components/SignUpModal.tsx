import { Box, Button, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, VStack } from "@chakra-ui/react";
import { FaEnvelope, FaLock, FaUserNinja, FaUserSecret } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import React, { useState } from "react";


interface SignUpModalProps{
    isOpen: boolean;
    onClose:() => void;
}
export default function SignUpModal({ isOpen, onClose}: SignUpModalProps){

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    console.log("This is SignUpModal");


    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsLoading(true);
        try{
            const response = await fetch(`${process.env.REACT_APP_BACKEND_API}signup/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "username": username,  "name": name,  "email": email, "password": password}),
            });
            const json = await response.json();
            // alert(json.ok);

            if (json.success == "True"){
                alert("SignUp Success");
            } else{
                alert("Failed");
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
                        <ModalHeader>Sign Up</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <VStack>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color="gray.500">
                                            <FaUserSecret />
                                        </Box>}/>
                                    <Input variant={"filled"} value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement children={
                                        <Box color={"gray.500"}>
                                            <FaEnvelope />
                                        </Box>} />
                                    <Input variant={"filled"} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </InputGroup>
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
                            <Button onClick={handleSubmit} type="submit" mt={4} colorScheme="green" w="100%">Sign up</Button>
                            <SocialLogin />
                        </ModalBody>
                        
                        
                    </ModalContent>
                </Modal>
    )
}