import { Button } from "@chakra-ui/react";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import CustomButton from "../custom-button/custom-button.component";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window[`scrollTo`]({
      top: 0,
      behavior: `smooth`,
    });
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
