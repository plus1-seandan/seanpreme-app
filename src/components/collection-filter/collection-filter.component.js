import { Checkbox } from "@chakra-ui/react";
import { useState } from "react";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

import "./collection-filter.styles.scss";

//mock data
const data = {
  category: [
    "Graphic Tees",
    "Tanks",
    "Shirts",
    "Activewear",
    "Sweaters",
    "Knit Tops",
    "Screen Tops",
  ],
  size: ["S", "M", "L", "XL"],
};

const CollectionFilter = () => {
  return (
    <div className="collection-filter">
      {Object.keys(data).map((type) => (
        <FilterGroup type={type} filters={data[type]} />
      ))}
    </div>
  );
};

const FilterGroup = ({ type, filters }) => {
  const [show, setShow] = useState(true);

  return (
    <div className="filter-group">
      <div class="collapsible" onClick={() => setShow(!show)}>
        <span>{type}</span>
        <KeyboardArrowDownIcon />
      </div>

      {show && filters.map((filter) => <CustomCheckbox filter={filter} />)}
    </div>
  );
};

const CustomCheckbox = ({ filter }) => {
  return (
    <div className="filter-checkbox">
      <Checkbox className="checkbox" size="md" colorScheme="blackAlpha">
        {filter}
      </Checkbox>
    </div>
  );
};

export default CollectionFilter;
