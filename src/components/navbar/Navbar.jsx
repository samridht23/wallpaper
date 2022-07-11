import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Link,
  Popover,
  PopoverTrigger,
  useColorModeValue,
  useBreakpointValue,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  SearchIcon,
  RepeatIcon,
  EditIcon,
  ExternalLinkIcon,
  AddIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4, lg: 12 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 2 }}
          alignItems={"center"}
          justify={{ base: "start", md: "start" }}
        >
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "center" })}
            color={useColorModeValue("gray.800", "white")}
            alignItems={"center"}
            mr={3}
          >
            Logo
          </Text>

          <Flex
            display={{ base: "flex", lg: "flex" }}
            w={{ base: "100%", lg: "inherit" }}
          >
            <NavSearchBar />
          </Flex>

          <Flex display={{ base: "none", lg: "flex" }} ml={5}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          display={{ base: "none", lg: "flex" }}
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"ghost"}
            href={"#"}
          >
            Sign In
          </Button>
          <Button
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"gray.900"}
            href={"#"}
            _hover={{
              bg: "gray.700",
            }}
          >
            Sign Up
          </Button>
        </Stack>
        <Flex
          flex={{ base: 0, md: 0 }}
          display={{ base: "flex", lg: "none" }}
          justify={"flex-end"}
          ml={2}
        >
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />}>Upload</MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>Explore</MenuItem>
              <MenuItem icon={<ExternalLinkIcon />}>Topics</MenuItem>
              <MenuDivider />
              <MenuItem icon={<RepeatIcon />}>Login</MenuItem>
              <MenuItem icon={<EditIcon />}>Register</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};
const NavSearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.500" />}
        alignItems={"center"}
      />
      <Input
        alignItems={"center"}
        variant="filled"
        borderRadius={10}
        placeholder="Search..."
        _placeholder={{ color: "gray.500" }}
      />
    </InputGroup>
  );
};
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={1}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Explore",
    href: "#",
  },
  {
    label: "Topics",
    href: "#",
  },
  {
    label: "Latest",
    href: "#",
  },
  {
    label: "More",
    href: "#",
  },
];
export default Navbar;
