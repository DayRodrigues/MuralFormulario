import {
  useToast,
} from "@chakra-ui/react"


export function useAlert() {
  const toast = useToast()
  
  const success = (message: string = "Sucesso!") => {
    toast({
      title: message,
      description: "Publicação realizada com sucesso!",
      position: "bottom-right",
      isClosable: true,
      status: "success",
      duration: 5000,
    })
}
 
  return { success }

}
