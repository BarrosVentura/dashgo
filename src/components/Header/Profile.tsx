import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}
export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adson Ventura</Text>
          <Text>adsonventura@gmail.com</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Adson Ventura"
        src="https://github.com/BarrosVentura.png"
      />
    </Flex>
  );
}
