import { GetStaticProps } from "next";
import React from "react";
import api from "../products/api";
import { Product } from "../products/types";
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Stack,
  Text,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";

interface IndexPageProps {
  products: Product[];
}

function parseCurrency(value: number): string {
  return `${value.toLocaleString("es-PE", {
    style: "currency",
    currency: "PEN",
  })}`;
}

const IndexPage: React.FC<IndexPageProps> = ({ products }) => {
  const [cart, setCart] = React.useState<Product[]>([]);
  const text = cart
    .reduce<string>(
      (message, product) =>
        message.concat(`* ${product.name} - ${parseCurrency(product.price)}\n`),
      ""
    )
    .concat(
      `\nTotal: ${parseCurrency(
        cart.reduce<number>((total, product) => total + product.price, 0)
      )}`
    );

  function handleAddToCart(product: Product) {
    setCart((cart) => cart.concat(product));
  }

  const whisky_category = products.filter(
    (products) => products.category === "whisky"
  );

  const ron_category = products.filter(
    (products) => products.category === "ron"
  );

  const cerveza_category = products.filter(
    (products) => products.category === "cerveza"
  );

  const vino_category = products.filter(
    (products) => products.category === "vino"
  );

  const vodka_category = products.filter(
    (products) => products.category === "vodka"
  );

  const pisco_category = products.filter(
    (products) => products.category === "pisco"
  );

  const tequila_category = products.filter(
    (products) => products.category === "tequila"
  );

  const licorpr_category = products.filter(
    (products) => products.category === "licor preparado"
  );

  const licorcr_category = products.filter(
    (products) => products.category === "licor de crema"
  );
  const otros_category = products.filter(
    (products) => products.category === "otros"
  );

  const ofertas_category = products.filter(
    (products) => products.category === "ofertas"
  );

  

  return (
    <Box p={4} align="center">
    <Stack>
    <Tabs size="lg" align="center" resize="vertical" >
      
      <TabList boxSize="-moz-min-content" >
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>Ofertas</Tab>
        <Tab _selected={{ color: 'white', bg: 'yellow.400' }}>Whisky</Tab>
        <Tab _selected={{ color: 'white', bg: 'orange.400' }}>Ron</Tab>
        <Tab _selected={{ color: 'white', bg: 'gray.400' }}>Pisco</Tab>
        <Tab _selected={{ color: 'white', bg: 'blue.400' }}>Tequila</Tab>
        <Tab _selected={{ color: 'white', bg: 'teal.400' }}>Vodka</Tab>
        <Tab _selected={{ color: 'white', bg: 'green.400' }}>Cerveza</Tab>
        <Tab _selected={{ color: 'white', bg: 'red.400' }}>Vino</Tab>
        <Tab _selected={{ color: 'white', bg: 'purple.200' }}>Licor Preparado</Tab>
        <Tab _selected={{ color: 'white', bg: 'teal.300' }}>Licor de crema</Tab>
        <Tab _selected={{ color: 'white', bg: 'gray.400' }}>Otros</Tab>
      </TabList>
      
      <TabPanels>
      <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {ofertas_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Heading fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Heading>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        {/* initially mounted */}
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {whisky_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        {/* initially not mounted */}
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {ron_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {pisco_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {tequila_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {vodka_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {cerveza_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {vino_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {licorpr_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {licorcr_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
        <TabPanel>
        <Grid
        gridGap={6}
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
      >
        {otros_category.map((product) => (
          <Flex
            spacing={3}
            key={product.id}
            borderRadius="md"
            padding={4}
            backgroundColor="gray.100"
          >
            <Stack spacing={1} width="100%">
              <Image src={product.image}></Image>
              <Text>{product.name}</Text>
              <Text fontSize="sm" color="green.500" fontWeight={500}>
                {parseCurrency(product.price)}
              </Text>
              <Button
                colorScheme="primary"
                variant="outline"
                onClick={() => handleAddToCart(product)}
                size="sm"
              >
                Agregar
              </Button>
            </Stack>
          </Flex>
         ))}
         </Grid>
        </TabPanel>
      </TabPanels>
      {cart.length > 0 && (
        <Flex
          alignItems="center"
          justifyContent="center"
          padding={4}
          bottom={4}
          left={0}
          right={0}
          position="fixed"
        >
          <Button
            as={Link}
            colorScheme="whatsapp"
            href={`https://wa.me/+51913006451?text=Hola%20${encodeURIComponent(
              text
            )}`}
            isExternal
          >
            Completar pedido ({cart.length} productos)
          </Button>
        </Flex>
      )}
    </Tabs>
    </Stack>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const products = await api.list();
  return {
    props: {
      products,
    },
    revalidate: 10, // 10 seconds
  };
};

export default IndexPage;
