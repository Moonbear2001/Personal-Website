import { LinkBox, LinkOverlay, Image } from "@chakra-ui/react";
import PropTypes from "prop-types";

const LogoLink = ({ website, logo, altText }) => {
  return (
    <LinkBox
      width="180px"
      height="180px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <LinkOverlay href={website} isExternal>
        <Image src={logo} alt={altText} maxHeight="160px" objectFit="contain" />
      </LinkOverlay>
    </LinkBox>
  );
};

LogoLink.propTypes = {
  website: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default LogoLink;
