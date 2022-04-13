import { Flex, Text, Icon, HStack, Box, Avatar, Link as ChakraLink } from "@chakra-ui/react";
import {FaLinkedin, FaGithub } from 'react-icons/fa'

export function Header(){
    return(
        <Flex as="header" width="100%" maxWidth={1480} height="20" marginX="auto" marginTop="4" paddingX="6" align="center">
            <Flex align="center" margin="auto">
                <Flex align="center">

                    <Box mr="4" textAlign="right">
                        <Text>Rafael Ribeiro</Text>
                        <Text color="gray.300" fontSize="small">Rafael@gmail.com</Text>
                    </Box>

                <Avatar size="md" name="Rafael Ribeiro" src="https://github.com/RaffahOlive.png"/>
                </Flex>

            <HStack spacing="8" marginX="8" pr="8" py="1" color="gray.300">
                <ChakraLink href="https://linkedin.com/in/rafaelribeirodev">
                    <Icon as={FaLinkedin} fontSize="20" />
                </ChakraLink>

                <ChakraLink href="https://github.com/RaffahOlive/">
                    <Icon as={FaGithub} fontSize="20" />
                </ChakraLink>
            </HStack>
        </Flex>
    </Flex>
    );
}