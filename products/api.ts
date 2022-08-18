import axios from "axios";
import Papa from "papaparse";
import { Product } from "./types";

interface ProductApiResponse {
  id: string;
  name: string;
  image: string;
  price: string;
  category: string;
}

export default {
  list: async (): Promise<Product[]> => {
    return axios
      .get(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vTFFhkafmk3Rd1mSSR3Zcfb96xuGWChgDIBlfwYEkgHNct5plKpqaXQxLYj_sXQVKt0t5JzfoK3Tqyi/pub?gid=868330863&single=true&output=csv",
        { responseType: "blob" }
      )
      .then(
        (response) =>
          new Promise<Product[]>((resolve, reject) => {
            Papa.parse<ProductApiResponse>(response.data, {
              header: true,
              complete: (results) =>
                resolve(
                  results.data.map((product) => ({
                    ...product,
                    price: Number(product.price),
                  }))
                ),
              error: (error) => reject(error.message),
            });
          })
      );
  },
};
