import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { LuMoon, LuSun } from "react-icons/lu";

const ToggleColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Button bg="transparent" onClick={() => toggleColorMode()} >
      {colorMode === "dark" ? ( <LuSun /> ) : ( <LuMoon /> )}
    </Button>
  );
};

export default ToggleColorMode;