import { Outlet } from "react-router-dom";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Box, Button, HStack, IconButton, Text, extendTheme } from "@chakra-ui/react";
import { FaMoon} from "react-icons/fa";
import Header from "./Header";


export default function Root(){
    return (
        <Box>
            <Header />
            <Outlet />
        </Box>
    )
}