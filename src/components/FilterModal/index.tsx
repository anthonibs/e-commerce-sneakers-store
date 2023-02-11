import { ButtonGoBack, Container, FilterSection, Header } from './FilterModal';

import { HiArrowLeft } from 'react-icons/hi';

interface IProps {
  children: React.ReactNode;
  modalFilter: boolean;
  setModalFilter: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterModal = ({ children, modalFilter, setModalFilter }: IProps) => {

  function handleClosed() {
    setModalFilter(!modalFilter);
  }


  return (
    <Container
      className={modalFilter ? 'active-filter' : ''}
    >
      <Header>
        <ButtonGoBack
          tabIndex={0}
          onClick={handleClosed}
          aria-label='Open filters menu'
          aria-hidden={!modalFilter}
        >
          <HiArrowLeft />
          Filters
        </ButtonGoBack>
      </Header>

      <FilterSection>
        {children}
      </FilterSection>
    </Container>
  );
};

export default FilterModal;