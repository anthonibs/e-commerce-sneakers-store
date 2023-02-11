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
  const [open, setOpen] = useState<boolean>(false);

  function handlerExitFilterField() {
    setOpen(false);
  }
  

  return (
    <Container>
      <ButtonFilter
        onMouseLeave={handlerExitFilterField}
      >
        <TitleFilter
          open={open}
          onClick={() => setOpen(prevState => !prevState)}
        >
          {selected || filterDefault}
          <IoMdArrowDropdown size={24} />
        </TitleFilter>

        <ListOrderContainer
          className={open ? 'active-menu-order' : 'disabled-menu-order'}
        >
          {options.map((item: string, index: number) => (
            <ListOrderItem
              key={index}
              onClick={() => handlerSelectedFilter(item.toLowerCase(), selected, setSelected)}
              className={item.toLowerCase() === selected ? 'active-filter' : ''}
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