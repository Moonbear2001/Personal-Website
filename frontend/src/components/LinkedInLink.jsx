import { Box, Link, Image } from "@chakra-ui/react";
import linkedInLogo from "../assets/linkedin-logo-circular.png"

const LinkedInLink = () => {
  return (
    <Box textAlign="center" py={10}>
      <Link href="https://www.linkedin.com/in/desmond-roberts-80b000220/" isExternal>
        <Image
          src={linkedInLogo}
          alt="LinkedIn Logo"
          boxSize="50px"
          objectFit="cover"
        />
      </Link>
    </Box>
  );
}

export default LinkedInLink;