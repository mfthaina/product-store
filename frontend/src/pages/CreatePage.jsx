import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <Container maxW={"container.sm"}>
      <VStack spacing={8}>
        <Heading
          as={"h1"}
          size={"lg"}
          textAlign={"center"}
          mb={8}
          textTransform={"uppercase"}
          bgGradient={"linear(to-r, #29A6A6, #F18DF2)"}
          bgClip={"text"}
        >
          Create new product
        </Heading>

        <Box
          w={"full"}
          bg={useColorModeValue("#fefdff", "#231c4f")}
          p={6}
          rounded={"lg"}
          shadow={"md"}
        >
          <VStack spacing={4}>
            <Input
              placeholder="Product name"
              _placeholder={{
                color: useColorModeValue("#231c4f", "#ffff"),
              }}
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            <Input
              placeholder="Price"
              _placeholder={{
                color: useColorModeValue("#231c4f", "#ffff"),
              }}
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Image URL"
              _placeholder={{
                color: useColorModeValue("#231c4f", "#ffff"),
              }}
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />

            <Button
              bg={useColorModeValue("#231c4f", "#413681")}
              onClick={handleAddProduct}
              w="full"
              color={"white"}
              _hover={{
                bg: useColorModeValue("#bd8feb", "#45398f"),
                transition: "all 0.2s ease-in-out",
              }}
            >
              Add product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};
export default CreatePage;
