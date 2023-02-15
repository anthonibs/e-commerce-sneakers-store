import { memo, useState } from 'react';

import {
  ButtonFilter,
  Container,
  ListOrderContainer,
  ListOrderItem,
  TitleFilter
} from './Filter';

import { IoMdArrowDropdown } from 'react-icons/io';
import handlerSelectedFilter from 'shared/utils/selectedFilter';

interface IFilter {
  options: string[];
  filterDefault: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ selected, setSelected, options, filterDefault }: IFilter) => {
  
  const [openModalMobileFilter, setOpenModalMobileFilter] = useState<boolean>(false);

  function handlerExitFilterField() {
    setOpenModalMobileFilter(false);
  }

  function handleOpenFilter(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'Enter') setOpenModalMobileFilter(prevState => !prevState);
  }

  function handleSelectedFilter(event: React.KeyboardEvent<HTMLLIElement>, item: string) {
    if (event.key === 'Enter') handlerSelectedFilter(item.toLowerCase(), selected, setSelected);
  }


  return (
    <Container>
      <ButtonFilter
        onMouseLeave={handlerExitFilterField}
        onKeyUp={(e) => handleOpenFilter(e)}
      >
        <TitleFilter
          open={openModalMobileFilter}
          onClick={() => setOpenModalMobileFilter(prevState => !prevState)}
        >
          {selected || filterDefault}
          <IoMdArrowDropdown size={18} />
        </TitleFilter>

        <ListOrderContainer
          className={openModalMobileFilter ? 'active-menu-order' : 'disabled-menu-order'}
        >
          {options.map((item: string, index: number) => (
            <ListOrderItem
              key={index}
              tabIndex={0}
              className={item.toLowerCase() === selected ? 'active-filter' : ''}
              onClick={() => handlerSelectedFilter(item.toLowerCase(), selected, setSelected)}
              onKeyUp={(event) => handleSelectedFilter(event, item.toLowerCase())}
            >
              {item}
            </ListOrderItem>
          ))}
        </ListOrderContainer>
      </ButtonFilter>

    </Container >
  );
};

export default memo(Filter);