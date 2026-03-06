import {
    AlertDialog, 
    AlertDialogBody, 
    AlertDialogContent, 
    AlertDialogFooter, 
    AlertDialogHeader, 
    AlertDialogOverlay, 
    Button,
} from "@chakra-ui/react";
import { useRef } from "react"

    type ConfirmarExclusaoProps = {
        isOpen: boolean
        onClose: () => void
        onOpen: () => void
    }

export function ConfirmarExclusao ({isOpen, onClose, onOpen}: ConfirmarExclusaoProps) {
    const cancelRef = useRef<HTMLButtonElement>(null)

    return (

        <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Excluir públicação
            </AlertDialogHeader>

            <AlertDialogBody>
              Tem certeza que deseja excluir? Você não poderá desfazer essa ação depois.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme='red' onClick={onOpen} ml={3}>
                Excluir
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>


    )
}