import {
  Button,
  Container,
  Flex,
  HStack,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, #29A6A6, #F18DF2)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              bg={useColorModeValue("#d9c0f2", "#413681")}
              borderRadius="full"
              w="40px" // largura fixa
              h="40px" // altura fixa
              minW="40px" // largura mínima para sobrescrever o padrão do Chakra
              p="0" // remove o padding padrão
              _hover={{
                bg: useColorModeValue("#bd8feb", "#45398f"),
                transition: "all 0.2s ease-in-out",
              }}
            >
              <FaPlus
                fontSize={20}
                color={colorMode === "dark" ? "#FFFFFF" : "#1D0726"}
              />
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            bg={useColorModeValue("#d9c0f2", "#413681")}
            borderRadius="full"
            w="40px" // largura fixa
            h="40px" // altura fixa
            minW="40px" // largura mínima para sobrescrever o padrão do Chakra
            p="0" // remove o padding padrão
            _hover={{
              bg: useColorModeValue("#bd8feb", "#45398f"),
              transition: "all 0.2s ease-in-out",
            }}
          >
            {colorMode === "light" ? (
              <IoMoon color={colorMode === "dark" ? "#FFFFFF" : "#1D0726"} />
            ) : (
              <LuSun
                size="20"
                color={colorMode === "dark" ? "#FFFFFF" : "#1D0726"}
              />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};
export default Navbar;
