import { Button } from "@chakra-ui/react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { scrollToTop } from "../../utils/scrollToTop";

const ScrollToTopButton = () => {
  const handleClick = () => {
    scrollToTop();
  };
  return (
    <div>
      <Button onClick={handleClick} colorScheme="blackAlpha">
        <ExpandLessIcon />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
