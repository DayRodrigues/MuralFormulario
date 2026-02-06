import {
  Box,
  Button,
  Collapse,
  Icon,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Select,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { FaFilter } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from "zod";
import { useFilterContext } from "./FilterContext";
import { useEffect } from "react";

export const filtroSchema = z.object({
  cargo: z
    .enum([
      "Diretor",
      "ViceDiretor",
      "Coordenador",
      "Professor",
    ])
    .refine(val => !!val, { message: "Selecione o cargo" }),
  seguimento: z
    .enum([
      "Educacao Infantil",
      "Anos Iniciais",
      "Anos Finais",
    ])
    .refine(val => !!val, { message: "Selecione o seguimento" }),
});

type userFiltro = z.infer<typeof filtroSchema>;

function Filtro() {
  const { isOpen, onToggle } = useDisclosure()
  const { onClearFilters } = useFilterContext();

  const {
    handleSubmit,
    register,
    reset,
    watch,
    formState: { },
  } = useForm<userFiltro>({
    resolver: zodResolver(filtroSchema),
  });

  const { registerClearCallback } = useFilterContext();
  const cargoValue = watch("cargo");
  const seguimentoValue = watch("seguimento");

  useEffect(() => {
    registerClearCallback("filtro", () => {
      reset();
    }, () => {
      return !!cargoValue || !!seguimentoValue;
    });
  }, [reset, registerClearCallback, cargoValue, seguimentoValue]);

  const onSubmit = (data: userFiltro) => {
    console.log(data);

    const selecaoFiltro = {
      cargo: {
        Diretor: () => console.log("Cargo: Diretor"),
        ViceDiretor: () => console.log("Cargo: Vice-Diretor"),
        Coordenador: () => console.log("Cargo: Coordenador"),
        Professor: () => console.log("Cargo: Professor"),
      },
      seguimento: {
        "Educacao Infantil": () => console.log("Seguimento: Educação Infantil"),
        "Anos Iniciais": () => console.log("Seguimento: Anos Iniciais"),
        "Anos Finais": () => console.log("Seguimento: Anos Finais"),
      },
    };

    if (data.cargo) {
      selecaoFiltro.cargo[data.cargo]?.();
    }

    if (data.seguimento) {
      selecaoFiltro.seguimento[data.seguimento]?.();
    }
  };

  return (
    <Flex
      w="100%"
      mt="20px"
    >
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Button
          type="button"
          onClick={onToggle}
          mx={{ base: "10px", md: "100px"}}
          border="1px solid"
          borderColor="gray.400"
          bg="white"
          color="black"
          _hover={{
            bg: "gray.100"
          }}
        >
          <Icon as={FaFilter} boxSize="15px" mr={2} />
          <Text > Filtrar </Text>
        </Button>
        <Collapse in={isOpen} animateOpacity>

          <Box
            px={{ base: "5%", md: "50px", lg: "6%" }}
            my={{ base: "10px", md: "20px", lg: "20px" }}
          >
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 2 }}
              spacing={6}
              fontWeight="semibold"
              color="gray.600"
            >
              <FormControl>
                <FormLabel > Selecione o cargo: </FormLabel>
                <Select
                  {...register("cargo")}
                  defaultValue=""
                  border="none"
                  boxShadow="none"
                  borderBottom="2px solid"
                  _hover={{
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "gray.600"
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "2px solid"
                  }}
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Diretor">Diretor(a)</option>
                  <option value="ViceDiretor">Vice-Diretor(a)</option>
                  <option value="Coordenador">Coordenador(a)</option>
                  <option value="Professor">Professor(a)</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel> Selecione o seguimento: </FormLabel>
                <Select
                  {...register("seguimento")}
                  defaultValue=""
                  border="none"
                  boxShadow="none"
                  borderBottom="2px solid "
                  _hover={{
                    border: "none",
                    borderBottom: "2px solid",
                    borderColor: "gray.600"
                  }}
                  _focusVisible={{
                    border: "none",
                    borderBottom: "2px solid"
                  }}
                >
                  <option value="" disabled>Selecione uma opção</option>
                  <option value="Educacao Infantil">Ed. Infantil</option>
                  <option value="Anos Iniciais">EF Anos Iniciais</option>
                  <option value="Anos Finais">EF Anos Finais</option>
                </Select>
              </FormControl>
            </SimpleGrid>
          </Box>

          <Box
            m="10px"
            pr="100px"
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              type="submit"
              color="black"
              bg="gray.200"
              _hover={{
                bg: "gray.400"
              }}
            >
              <Icon as={IoIosSearch} boxSize="23px" mr={2} />
              <Text fontWeight="normal"> Pesquisar </Text>
            </Button>
            <Button
              type="button"
              onClick={onClearFilters}
              border="none"
              bg="white"
              color="black"
              _hover={{
                bg: "white"
              }}
              _active={{
                bg: "white"
              }}
            >
              <Icon as={FaFilter} boxSize="15px" mr={2} />
              <Text fontWeight="normal" > Limpar filtros </Text>
            </Button>
          </Box>
        </Collapse>
      </form>
    </Flex>

  );
}

export default Filtro;