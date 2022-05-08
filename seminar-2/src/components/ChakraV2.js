import {
  Button,
  Modal,
  Select,
  Heading,
  Alert,
  AlertIcon,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import Container from "./Container";

const ChakraV2 = ({ data }) => {
  const [alertOpen, setAlertOpen] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container title="Chakra UI" Heading={Heading}>
        <Button onClick={() => setAlertOpen(!alertOpen)}>Button</Button>

        <Select placeholder="How should we contact you?">
          <option value="option1">Email</option>
          <option value="option2">Phone</option>
          <option value="option3">Mail</option>
        </Select>

        <Button onClick={onOpen}>Open Modal</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <p>{data.lorem}</p>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>

      {alertOpen && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>Alert!</AlertTitle>
          <AlertDescription>{data.alertText}</AlertDescription>
          <CloseButton
            alignSelf="flex-start"
            position="relative"
            right={-1}
            top={-1}
            onClick={() => setAlertOpen(false)}
          />
        </Alert>
      )}
    </>
  );
};

export default ChakraV2;
