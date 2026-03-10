import {
    Badge,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    FormLabel,
    Heading,
    Icon,
    Text,
    Tooltip,
    VStack
} from "@chakra-ui/react"
import { CiImageOn } from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react"
import { ConfirmarExclusao } from './alertDialog'

 
type CardPublicacaoProps = { //tipos
    titulo: string;
    data: string;
    descricao: string;
    imagem?: boolean;
    destaque?: boolean;
    labelImagem?: string;
    responsavel: string;
    cargo: string;
    segmento: string;
    onVerMais: () => void;
    onExcluir: () => void;
    editar:() => void;
};

export const CardPublicacao = ({  //props
    titulo,
    data,
    descricao,
    responsavel,
    cargo,
    segmento,
    imagem = false,
    destaque = false,
    labelImagem = "1 imagem",
    onVerMais,
    onExcluir,
    editar,
}: CardPublicacaoProps) => {

    const [ isOpen, setIsOpen] = useState(false)

    const confirmarExclusao = () => {
        onExcluir()
        setIsOpen(false)
    }

    return (
        <>
        <ConfirmarExclusao 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={confirmarExclusao}
        />
        
        <Card
            position="relative"
            boxShadow="0 0 20px rgba(0, 0, 0, 0.25)"
            borderWidth={destaque ? "2px" : "1px"}
            borderColor={destaque ? "#ebc137" : "gray.200"}
        >

            {destaque && (  //Se destaque for verdadeiro renderize
                <Flex
                    justifyContent="flex-end"
                >
                    <Tooltip label="Destaque" hasArrow>
                        <Icon
                            as={TiStarFullOutline}
                            boxSize={{ base: 35, md: 50 }}
                            position="absolute"
                            color="#ebc137"
                            cursor="pointer"
                            top={{ base: "-4", md: "-22px" }}
                            right={{ base: "-4", md: "-26px" }}
                            transition="filter 0.3s ease"
                            _hover={{
                                filter: "drop-shadow(0 0 4px #e0be27)"
                            }}
                        />
                    </Tooltip>
                </Flex>
            )}
            <CardHeader display="flex" flexDirection="column">
                <Heading size="md">{titulo}</Heading>
                <Text fontSize="sm" color="gray.700" >{data}</Text>
            </CardHeader>

            <CardBody  >
                <VStack align="start" spacing={2}>
                    <Tooltip label={descricao}>  {/* mostra o texto completo na prévia  */}
                        <Text noOfLines={{ base: 2, md: 1 }}>{descricao}</Text> {/* Especifica a quantidade de linhas que irão aparecer  */}
                    </Tooltip>

                    {imagem && (   //Se imagem for verdadeira renderize
                        <FormLabel m={0} display="flex" alignItems="center" gap={2}>
                            <Tooltip hasArrow
                                label={labelImagem}
                                fontSize="sm"
                                borderRadius="md"
                                bg="black"
                            >
                                <Icon as={CiImageOn} boxSize={6} cursor="pointer" />
                            </Tooltip>

                            <Badge colorScheme="blue">Imagem em anexo</Badge> {/*Sinaliza o status, está indicando que tem a imagem */}
                        </FormLabel>
                    )}

                    <Text >
                        <strong>Responsável pela realização:</strong> {responsavel} - {cargo} - {segmento}
                    </Text>

                </VStack>
            </CardBody>

            <CardFooter justifyContent="flex-end" gap="10px">{/* Executa a função */}

                <Button
                onClick={() => setIsOpen(true)}
                    mr="auto"
                    bg="none"
                    textColor="red.500"
                    _hover={{
                        bg: "none",
                        textColor:"red.500"
                    }}
                >
                     <Tooltip
                      label="Excluir"
                      fontSize="md"
                      borderRadius="md"
                      bg="black"
                    >          
                    <Icon
                        as={RiDeleteBin6Line}
                        boxSize="25px"
                        mr={2}
                    > 
                    </Icon>
                    </Tooltip>
                    {/* Excluir */}
                </Button>

                <Button
                onClick={editar}
                    bg="none"
                    borderRadius="none"
                    borderBottom="1px solid transparent"
                    _hover={{
                        bg: "none",
                        borderBottom: "1px solid black",
                    }}
                >
                    <Icon
                        as={CiEdit}
                        boxSize="22px"
                        mr={2}
                    >
                    </Icon>
                    Editar
                </Button>

                <Button
                    onClick={onVerMais}
                    colorScheme="blue"
                >
                    Ver mais
                </Button>
            </CardFooter>
        </Card>
        </>
    );
};