import {
    Button,
     useToast,
     Wrap,
     WrapItem

 } from "@chakra-ui/react"


function alert() {

  const toast = useToast()
  const positions = [
    'bottom-right',
  ]

  return (
    <Wrap>
      {positions.map((position, i) => (
        <WrapItem key={i}>
          <Button
            onClick={() =>
              toast({
                title: `${position} toast`,
                position: position,
                isClosable: true,
              })
            }
          >
            Show {position} toast
          </Button>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default alert;