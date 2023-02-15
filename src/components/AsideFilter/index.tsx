import { memo, useState } from 'react';
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

  function handleEnableAndDisableButton(event: React.KeyboardEvent<HTMLLIElement>, item: string) {
    if(event.key === 'Enter') handlerSelectedFilter(item, selected, setSelected);
    if(event.key === 'Escape') setOpenFilter(false);
  }

  return (
    <Container aria-labelledby={title}>
      <TitleFilter  
        onClick={() => setOpenFilter(prevState => !prevState)}
        isOpen={openFilter}
        id={title}
        aria-hidden={!openFilter}
        tabIndex={0}
      >
        {title}
        <IoMdArrowDropdown size={18} />
      </TitleFilter>

      <FilterOrderContainer
        aria-hidden={!openFilter}
        className={openFilter ? 'active-menu-order' : 'disabled-menu-order'}
      >
        {options.map((item: string, index: number) => (
          <FilterOrderItem
            key={index}
            tabIndex={0}
            className={item.toLowerCase() === selected ? 'active-filter' : ''}
            onClick={() => handlerSelectedFilter(item, selected, setSelected)}
            onKeyUp={(event) => handleEnableAndDisableButton(event, item)}
          >
            {item}
          </FilterOrderItem>
        ))}
      </FilterOrderContainer>
    </Container >
  );
};

export default memo(AsideFilter);