import { Flex, Text } from "@chakra-ui/react";


const Title = () => {
    return (

        <Flex
            px="10px"
            margin="8px"
            align="center"
        >

            <Text className="Title"
                fontSize={{ base: "18", lg: "28" }}
                color="#666"
                fontWeight="medium"
            >
                Mural escolar
            </Text>
        </Flex>
    )
}
export default Title;