import { Box, Breadcrumb, BreadcrumbLink, Icon, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import CustomBreadcrumbItem from "./CustomBreadcrumbItem";

const CustomBreadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Box width="fit-content">
      <Breadcrumb fontWeight="medium" fontSize="sm">
        <Text fontSize="1xl" pr={2}>
          user@website ~ ${" "}
        </Text>
        <CustomBreadcrumbItem to="/" text="Home" />
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <CustomBreadcrumbItem
              key={name}
              isCurrentPage={isLast}
              to={routeTo}
              text={name.charAt(0).toUpperCase() + name.slice(1)}
            />
          );
        })}
      </Breadcrumb>
    </Box>
  );
};

export default CustomBreadcrumb;
