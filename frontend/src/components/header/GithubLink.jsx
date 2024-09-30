import { Box, Link, Image } from "@chakra-ui/react";
import githubLogo from "/logos/github-logo-circular.png";

const GithubLink = () => {
  return (
    <Box textAlign="center" py={10}>
      <Link href="https://github.com/Moonbear2001" isExternal>
        <Image
          src={githubLogo}
          alt="GitHub Logo"
          boxSize="50px"
          objectFit="cover"
        />
      </Link>
    </Box>
  );
};

export default GithubLink;
