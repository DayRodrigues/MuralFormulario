import { 
    Badge,
    Button, 
    Card, 
    CardBody, 
    CardFooter, 
    CardHeader, 
    FormLabel, 
    Heading, 
    Icon, 
    Text, 
    Tooltip, 
    VStack
} from "@chakra-ui/react"
import { 
    CiImageOn 
} from "react-icons/ci";
import { TiStarFullOutline } from "react-icons/ti";

type CardPublicacaoProps = {
    titulo: string;
    data: string;
    descricao: string;

    imagem?: boolean;
    destaque?: boolean;
    labelImagem?: string;
    responsavel: string;
    cargo:string;
    segmento:string;
    onVerMais?: () => void;
};

export const CardPublicacao = ({
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
}: CardPublicacaoProps) => {

    return (
        <Card border="3px dotted" borderColor="gray.600" position="relative" boxShadow="lg">
             
             {destaque && (
            <Tooltip label="Destaque" hasArrow>
             <Icon 
             as={TiStarFullOutline} 
             boxSize={10} 
             position="absolute" 
             top="-20px"
             right="20px"
             color= "#ebc137"
             cursor="pointer"
             />
             </Tooltip>
             )}            
            <CardHeader display="flex" flexDirection="column">
                <Heading size="md">{titulo}</Heading>
                <Text fontSize="sm" color="gray.700" >{data}</Text>
            </CardHeader>
            
            <CardBody>
                <VStack align="start" spacing={2}>
                <Tooltip
                label={descricao}>
                <Text noOfLines={{ base: 2, md: 1 }}>{descricao}</Text>
                </Tooltip>

                {imagem && (
                <FormLabel m={0} display="flex" alignItems="center" gap={2}>
                    <Tooltip  hasArrow
                        label={labelImagem}
                        fontSize="sm"
                        borderRadius="md"
                        bg="black"
                    >
                        <Icon as={CiImageOn} boxSize={6} cursor="pointer" />
                    </Tooltip>

                    <Badge colorScheme="blue">Imagem em anexo</Badge>
                </FormLabel>
                )}
                
                {responsavel &&(
                    <Text>
                        <strong>Responsável pela realização:</strong> {responsavel} - {cargo} - {segmento}
                    </Text>                    
                )}
                </VStack>
            </CardBody>
           
            <CardFooter justifyContent="flex-end">
                <Button onClick={onVerMais}
                    colorScheme='blue'>Ver mais
                </Button>
            </CardFooter>
        </Card>
    );
};