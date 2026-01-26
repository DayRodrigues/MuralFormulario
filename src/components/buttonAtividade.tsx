import { Button, Flex, Icon, Text,} from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ButtonAtividade() {

    return (
        <Flex
            align="center"
            justify={{ base: "center", md: "flex-end" }}
            mt={{ base:"10px" }}
            pr={{ base: "center", md: "6%", lg:"6%" }}
            >
            <Button 
                type="submit"
                color="white"
                bg="blue.400"
                _hover={{
                bg:"green.400",        
                }}             
            >
                <Icon as={IoMdAddCircleOutline} boxSize={5} mr={2} />
                <Text fontWeight="bold">Novo registro </Text>
            </Button>
        </Flex>
    )
}