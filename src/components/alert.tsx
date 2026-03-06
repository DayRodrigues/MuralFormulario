import {
  useToast,
} from "@chakra-ui/react"


export function useAlert() {
  const toast = useToast()

  const success = (message: string = "Sucesso!", description: string = "") => {
    toast({
      title: message,
      description: description,
      position: "bottom-right",
      isClosable: true,
      status: "success",
      duration: 5000,
    })
  }

  return { success }
}
