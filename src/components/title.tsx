import { Flex, Text } from "@chakra-ui/react";


const Title = () => {
    return (

        <Flex
            px={{ base: "8px", md: "100px" }}
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