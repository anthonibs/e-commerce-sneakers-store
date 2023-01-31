import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import { IProduct } from 'shared/interfaces/ProductsInterfaces';

export const CartContext = createContext({});
CartContext.displayName = 'ShoppingCart';

interface ICartProviderProps {
  children: ReactNode;
}

interface IQuantity {
  totalQuantity: number;
  totalValue: number
}

interface ICartProvider {
  listCart: IProduct[];
  setListCart: React.Dispatch<React.SetStateAction<ICartProvider[]>>;
  quantity: IQuantity;
  setQuantity: React.Dispatch<React.SetStateAction<IQuantity>>
}

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [listCart, setListCart] = useState<ICartProvider[]>([]);
  const [quantity, setQuantity] = useState<IQuantity>({} as IQuantity);

  return (
    <CartContext.Provider
      value={{
        listCart,
        setListCart,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};


export const useCartContext = () => {

  const { listCart, setListCart, quantity, setQuantity } = useContext<any>(CartContext);


  function changeQuantity(id: number, quantity: number) {
    return listCart.map((product: IProduct) => {
      if (product.id === id) product.quantity += quantity;
      return product;
    });
  }


  function handleMinusCart(id: number) {
    const existProduct = listCart.find((product: IProduct) => product.id === id);
    const lastItem = existProduct?.quantity === 1;

    if (lastItem) {
      return setListCart((previousCart: IProduct[]) => previousCart.filter((product: IProduct) => product.id !== id));
    }
    setListCart(changeQuantity(id, -1));
  }


  function handlePlusCart(newProduct: IProduct) {
    const existProduct = listCart.some((product: IProduct) => product.id === newProduct.id);

    const valueDiscount = (1 - (newProduct.discountPercentage === null ? 0 : newProduct.discountPercentage) / 100);

    if (!existProduct) {
      newProduct.quantity = 1;
      newProduct.priceCurrent = newProduct.quantity * (newProduct.price * valueDiscount);

      return setListCart((prevState: IProduct[]) =>
        [...prevState, newProduct]);
    }
    setListCart(changeQuantity(newProduct.id, 1));
  }

  function handlerRemoveProductCart(id: number) {
    setListCart((prevState: IProduct[]) => prevState.filter((item: IProduct) => item.id !== id));
  }


  useEffect(() => {
    const totalCart = listCart.reduce((accumulator: IQuantity, product: IProduct) => {
      return {
        totalQuantity: accumulator.totalQuantity + product.quantity,
        totalValue: accumulator.totalValue + (product.price * product.quantity)
      };
    }, {
      totalQuantity: 0,
      totalValue: 0
    });

    setQuantity(totalCart);

  }, [listCart, setQuantity]);

  return {
    listCart,
    setListCart,
    handleMinusCart,
    handlePlusCart,
    quantity,
    handlerRemoveProductCart
  };

};