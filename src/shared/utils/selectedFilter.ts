export default function handlerSelectedFilter(
  item: string,
  selected: string,
  setSelected: React.Dispatch<React.SetStateAction<string>>) {
  const itemToLowerCase = item.toLowerCase(); 

  if (selected === itemToLowerCase) {
    setSelected('');
  }
  if (selected !== itemToLowerCase) {
    setSelected(itemToLowerCase);
  }
}