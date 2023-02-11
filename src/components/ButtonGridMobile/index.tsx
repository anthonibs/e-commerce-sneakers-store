import { ButtonGrid, Container } from './ButtonGridMobile';

import {
  TfiLayoutListThumb,
  TfiLayoutMediaCenterAlt,
  TfiLayoutGrid2
} from 'react-icons/tfi';


interface IButtonGrid {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const ButtonGridMobile = ({ selected, setSelected }: IButtonGrid) => {

  const icons = [
    {
      id: 1,
      name: 'default',
      label: 'Divided into two columns image and product information',
      icon: <TfiLayoutListThumb />
    },
    {
      id: 2,
      name: 'fullsize-image',
      label: 'Divided into two lines image and product information',
      icon: <TfiLayoutMediaCenterAlt />
    },
    {
      id: 3,
      name: 'double-columns',
      label: 'Divided products into columns',
      icon: <TfiLayoutGrid2 />
    },
  ];

  function handleFilter(name: string) {
    setSelected(name);
  }

  return (
    <Container>
      {icons.map(icon => (
        <ButtonGrid
          key={icon.id}
          onClick={() => handleFilter(icon.name)}
          className={selected === icon.name ? 'selected' : ''}
          data-version={icon.name}
          aria-label={icon.label}
          aria-selected={selected === icon.name && true}
        >
          {icon.icon}
        </ButtonGrid>
      ))}
    </Container>
  );
};


export default ButtonGridMobile;