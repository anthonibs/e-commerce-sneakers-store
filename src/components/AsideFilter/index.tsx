import { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import handlerSelectedFilter from 'shared/utils/selectedFilter';

import {
  Container,
  FilterOrderContainer,
  FilterOrderItem,
  TitleFilter
} from './AsideFilter';


interface IAsideFilter {
  options: string[];
  title: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const AsideFilter = ({
  options,
  selected,
  setSelected,
  title }: IAsideFilter) => {

  const [openFilter, setOpenFilter] = useState<boolean>(false);


  return (
    <Container>
      <TitleFilter
        open={openFilter}
        onClick={() => setOpenFilter(prevState => !prevState)}
      >
        {title}
        <IoMdArrowDropdown size={18} />
      </TitleFilter>

      <FilterOrderContainer
        className={openFilter ? 'active-menu-order' : 'disabled-menu-order'}
      >
        {options.map((item: string, index: number) => (
          <FilterOrderItem
            key={index}
            className={item.toLowerCase() === selected ? 'active-filter' : ''}
            onClick={() => handlerSelectedFilter(item, selected, setSelected)}
          >
            {item}
          </FilterOrderItem>
        ))}
      </FilterOrderContainer>
    </Container>
  );
};

export default AsideFilter;