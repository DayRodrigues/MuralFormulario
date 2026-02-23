
import { Badge, Button, Card, CardBody, CardFooter, CardHeader, FormLabel, Heading, Icon, Text, Tooltip } from "@chakra-ui/react"
import { CiImageOn } from "react-icons/ci";

type CardPublicacaoProps = {
    titulo: string;
    data: string;
    descricao: string;
};

export const CardPublicacao = ({
    titulo,
    data,
    descricao
}: CardPublicacaoProps) => {

    return (
        <Card border="3px dotted" borderColor="gray.600">
            <CardHeader display="column" flexDirection="column">
                <Heading size="md">{titulo}</Heading>
                <Text fontSize="sm" color="gray.700" >{data}</Text>
            </CardHeader>

            <CardBody>
                <Tooltip
                        label={descricao}>
                <Text noOfLines={{ base: 2, md: 1 }}>{descricao}</Text>
                </Tooltip>
                <FormLabel m={0} display="flex" alignItems="center" gap={2}>
                    <Tooltip
                        label="1 imagem"
                        fontSize="sm"
                        borderRadius="md"
                        bg="black"
                    >
                        <Icon as={CiImageOn} boxSize={6} cursor="pointer" />
                    </Tooltip>
                    <Badge colorScheme="blue">Imagem em anexo</Badge>
                </FormLabel>
            </CardBody>

            <CardFooter justifyContent="flex-end">
                <Button as="a" href="/view/publicacoes"
                    colorScheme='blue'>Ver mais
                </Button>
            </CardFooter>

        </Card>
    );
};