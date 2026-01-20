import { Button, Flex, Icon, Text } from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function ButtonAtividade() {

    return (
        <Flex
            py={4}
            pr={{ base: 2, md: 12 }}
            justify={{ base: "center", md: "flex-end" }}>

            <Button
                bg="green.400"

            >
                <Icon as={IoMdAddCircleOutline} boxSize={5} mr={2} />
                <Text fontWeight="bold-300">Registrar atividade</Text>
            </Button>

        </Flex>
    )
}