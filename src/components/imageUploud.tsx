import {
    Flex,
    FormControl,
    FormLabel,
    Icon,
    Image,
    Input,
    Tooltip,
    Button,
    FormErrorMessage,
} from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";

type ImageUploadProps = {
    previewImages: string[];
    onChange: (files: FileList | null) => void;
    onClear: () => void;
    onRemove: (index: number) => void;
    error?: string;
};

const ImageUpload = ({
    previewImages,
    onChange,
    onClear,
    onRemove,
    error,
}: ImageUploadProps) => {

    return (

        <FormControl isInvalid={!!error}>
            <FormLabel display="flex" alignItems="center" gap={2}>
                Anexar imagem:
                <Tooltip
                    label="Máx. 3 imagens"
                    fontSize="md"
                    borderRadius="md"
                    bg="red.600"
                >
                    <Icon as={CiImageOn} boxSize={7} mr={4} />
                </Tooltip>
            </FormLabel>

            <Flex
                direction={{ base: "column" }}
                gap={2}
            >
                {previewImages.length > 0 && (
                    <Flex mt={3} wrap="wrap" gap="15px">
                        {previewImages.map((src, index) => (
                            <Flex
                            key={index}
                            position="relative"
                            boxSize="120px"
                            >

                            <Image
                                src={src}
                                alt={`Preview ${index}`}
                                boxSize="120px"
                                objectFit="cover"
                                borderRadius="md"
                            />

                            <Button
                            size="xs"
                            position="absolute"
                            top="2px"
                            right="2px"
                            borderRadius="full"
                            bg="blackAlpha.700"
                            color="white"
                            _hover={{bg: "red.500"}}
                            onClick={() => onRemove(index)}
                                >
                            x
                            </Button>
                           </Flex>
                        ))}
                        </Flex>
                    
                )}
                <Flex gap={2}>
                <Input
                    type="file"
                    accept="image/*"
                    multiple
                    p="5px"
                    flex="1"
                         onChange={(e) => onChange(e.target.files)}
                    />

                <Button
                    type="button"
                    bg="gray.300"
                    _hover={{
                        bg: "gray.400"
                    }}
                    onClick={onClear}
                >
                    Excluir
                </Button>
            </Flex>
            <FormErrorMessage>{error}</FormErrorMessage>
        </Flex>
    </FormControl >
  );
};

export default ImageUpload;
