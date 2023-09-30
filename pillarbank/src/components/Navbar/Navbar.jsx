import React from "react";
import { Stack, Box, Flex, Spacer, Text} from "@chakra-ui/react";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import Image from "next/image"


import Link from "next/link";

export default function Navbar () {
  return (
    <>
      <Box bg="#008080" p={4} color="black">
        <Flex>
          <Box alignItems="center" display="flex">
            <Stack display="flex" dir="inl" align="center" wrap="wrap">
              <Link href="/" fontSize="40" fontWeight="bold">
                <Text fontSize='2xl'>PillarBank</Text>
              </Link>
              <Link href="/" fontSize="40" fontWeight="bold">
                <Image src="/image/Logo.png" alt="Logo" width={64} height={64} mr={2} />
              </Link>
            </Stack>
          </Box>
          <Spacer />
          <Box alignItems="center" display="flex">
            <DropdownMenu />
          </Box>
        </Flex>
      </Box>
    </>
  );
};
