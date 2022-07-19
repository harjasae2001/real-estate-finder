import { Box } from "@chakra-ui/react";
const year = new Date();
const Footer = () => {
  return (
    <Box
      textAlign="center"
      p="5"
      color="gray.600"
      borderTop="1px"
      borderColor="gray.100"
    >
      {year.getFullYear()} Realtor, Inc.
    </Box>
  );
};

export default Footer;
