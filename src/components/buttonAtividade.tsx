'use client';

import { Button, Flex, Icon, Text,} from "@chakra-ui/react";
import { IoMdAddCircleOutline } from "react-icons/io";

type ButtonAtividadeProps = {
  onAbrir: () => void;
}

export default function ButtonAtividade({onAbrir} : ButtonAtividadeProps) {
  
    return (
         <Flex
            align="center"
            justify={{ base: "center", md: "flex-end" }}
            mt={{ base:"10px" }}
            pr={{ base: "center", md: "6%", lg:"6%" }}
             >
            <Button 
                type="button"
                color="white"
                bg="blue.400"
                onClick={onAbrir}
                _hover={{
                bg:"green.400",        
                }}             
            >
                <Icon as={IoMdAddCircleOutline} boxSize={5} mr={2} />
                <Text fontWeight="bold">Novo registro </Text>
            </Button>
        </Flex> 
    );
}