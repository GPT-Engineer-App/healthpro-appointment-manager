import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Link, Select, Stack, Text, useDisclosure, VStack, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, Spacer } from "@chakra-ui/react";
import { FaCalendarAlt, FaHome, FaCog, FaSignOutAlt, FaSearch } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Box bg="blue.900" color="white" px={5} py={3}>
          <Flex align="center" justify="space-between">
            <Heading size="lg">HealthApp</Heading>
            <Stack direction="row" spacing={4}>
              <IconButton icon={<FaHome />} aria-label="Home" />
              <IconButton icon={<FaCalendarAlt />} aria-label="My Bookings" />
              <IconButton icon={<FaCog />} aria-label="Settings" />
              <IconButton icon={<FaSignOutAlt />} aria-label="Logout" />
            </Stack>
          </Flex>
        </Box>

        {/* Search and Filter Section */}
        <Box p={5} bg="gray.50">
          <VStack spacing={4}>
            <Input placeholder="Search professionals" size="lg" />
            <Flex gap={2}>
              <Select placeholder="Specialty">
                <option value="cardiology">Cardiology</option>
                <option value="dermatology">Dermatology</option>
              </Select>
              <Select placeholder="Date">
                <option value="today">Today</option>
                <option value="tomorrow">Tomorrow</option>
              </Select>
              <Button leftIcon={<FaSearch />} colorScheme="blue">
                Search
              </Button>
            </Flex>
          </VStack>
        </Box>

        {/* Professional List */}
        <VStack spacing={4} p={5}>
          <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
            <Heading size="md">Dr. Jane Doe</Heading>
            <Text mt={4}>Cardiologist</Text>
            <Button mt={4} colorScheme="teal" onClick={onOpen}>
              Book Appointment
            </Button>
          </Box>
        </VStack>

        {/* Booking Form Modal */}
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Book an Appointment</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type="date" />
                <FormLabel mt={4}>Time</FormLabel>
                <Input type="time" />
                <FormLabel mt={4}>Special Instructions</FormLabel>
                <Input placeholder="Any special instructions?" />
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant="ghost">Book</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>

        {/* Footer */}
        <Box bg="blue.800" color="white" p={5}>
          <Flex direction="row" justify="space-between">
            <Text>© 2023 HealthApp</Text>
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
