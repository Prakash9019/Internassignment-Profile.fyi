import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";
import {
  getProducts,
  newProduct,
} from "@/backend/controllers/productControllers";

const handler = nc();

dbConnect(); //to connectto mongodb server

handler.get(getProducts);
handler.post(newProduct);

export default handler;
