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
            <Image borderRadius="50%" src="https://www.facebook.com/photo/?fbid=7915004155207221&set=a.206854906022223" />
            
          </VStack>
          <Divider my={6} />
          <Component {...pageProps} />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default MyApp;
