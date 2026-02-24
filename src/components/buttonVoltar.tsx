import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function BotaoVoltar() {
    const router = useRouter();

    return (
        <Flex
        px={{ base: "10px", md: "50px" }}
        justify={{ md: "flex-end" }}
        pr={{ base: "center", md: "100px" }}
        >
            <Button
                onClick={() => router.back()}
                colorScheme="blue"
            >
                Voltar
            </Button>
        </Flex>
    );
}