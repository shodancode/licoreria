import { AppProps } from "next/app";
import {
  ChakraProvider,
  Container,
  VStack,
  Image,
  Heading,
  Text,
  Box,
  Divider,
} from "@chakra-ui/react";
import theme from "../theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box padding={4}>
        <Container
          backgroundColor="white"
          boxShadow="md"
          my={4}
          maxWidth="container.xl"
          padding={4}
        >
          <VStack mb={6}>
            <Image borderRadius="50%" src="https://scontent.fjau2-1.fna.fbcdn.net/v/t39.30808-6/299606797_7915004071873896_4935666474124322977_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFPEQT_HqY20huYzzmD_Dznj0vIVAixSuWPS8hUCLFK5VcrnWwGwNaZlkipT3MNhsDyxiq2ZTwPtxdfFP8CaH0b&_nc_ohc=HPDb77sydG8AX-28Ums&_nc_ht=scontent.fjau2-1.fna&oh=00_AT_vpWyCHOgaEtxlomDzBNTONV2AN6Nlkjc16idXkqFMCQ&oe=630C3627" />
            
          </VStack>
          <Divider my={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
