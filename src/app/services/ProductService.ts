import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquiry } from "../../lib/types/product";

class ProductService {
  private readonly path: string;
  constructor() {
    this.path = serverApi; //state
  }
  public async getProducts(input: ProductInquiry): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`; //backendga request
      if (input.productCollection)
        url += `&productColllection=${input.productCollection}`;
      if (input.search) url += `&search=${input.search}`;
      //agar param ichida mavjud bolsa  uning ham qiymati kiritilsin

      const result = await axios.get(url); //obj meth call arg paste
      console.log("getProducts:", result); // kirib kelayotgan resultni bizga shunga biriktirilgan holda  print qilnsn

      return result.data;
    } catch (err) {
      console.log("Error, getProduct:", err);
      throw err;
    }
  }

  public async getProduct(productId: string): Promise<Product> {
    try {
      const url = `${this.path}/product/${productId}`;
      const result = await axios.get(url, { withCredentials: true });

      console.log("getProduct:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getTopUs  ers :", err);
      throw err;
    }
  }
}
export default ProductService;
