import { extendTheme, type ThemeConfig } from "@chakra-ui/react";


const config:ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
};

const theme = extendTheme({
    config, 
    fonts: {
        heading: "'Archivo Black', sans-serif",
        body: "'Archivo Black', sans-serif",
    },
});

export default theme;