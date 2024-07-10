import { useContext } from "react";
import { ProductContext } from "../features/Adminfeatures/contexts/ProductsContext";

export default function useProduct() {
    return useContext(ProductContext);
}