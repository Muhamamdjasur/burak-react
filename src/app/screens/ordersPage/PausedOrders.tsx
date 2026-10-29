import React from "react";
import { Box, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import { TabPanel } from "@mui/lab";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrivePausedOrders } from "./selector";   
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../components/auth";
import { useGlobals } from "../../hooks/useGlobal";
import OrderService from "../../services/OrderService";
import { OrderStatus } from "../../../lib/enums/order.enum";

/** REDUX SLICE & SELECTOR **/
const pausedOrdersRetriever = createSelector(
  retrivePausedOrders,      
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrdersProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  /** HANADLERS **/

  const deleteOrderHandler = async (e: T) => {
   try {
   const orderId  = e.target.value
 if (!authMember) throw new Error(Messages.error2);
 const input: OrderUpdateInput = {
  orderId: orderId,
  orderStatus: OrderStatus.DELETE,
 }

 const confirmation  = window.confirm("Do you want delete the order?");
 if (confirmation) {
  const order = new OrderService();
  await order.updateOrder(input);
  //ORDER REBUILD 
  setValue("2")
  setOrderBuilder(new Date());
}
   } catch (err) {
    console.log(err);
    sweetErrorHandling(err).then();
   }
  }

  const processOrderHandler = async (e: T) => {
   try {
   
 if (!authMember) throw new Error(Messages.error2);
 //PAYMENT PROCESS

const orderId  = e.target.value
 const input: OrderUpdateInput = {
  orderId: orderId,
  orderStatus: OrderStatus.PROCESS   ,
 }

 const confirmation  = window.confirm("Do you want to procced the payment ?");
 if (confirmation) {
  const order = new OrderService();
  await order.updateOrder(input);
  ///PAUSED => PROCCES OPRDERS
  setValue("2");
  //ORDER REBUILD  
  setOrderBuilder(new Date());
}
   } catch (err) {
    console.log(err);
    sweetErrorHandling(err).then();
   }
  }

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order.orderItems?.map((item: OrderItem) => {
                  const product = order.productData.find(
                    (ele: Product) => ele._id === item.productId
                  );
                  if (!product) return null;
                  const imagePath = `${serverApi}/${product.productImages[0]}`;

                  return (
                    <Box key={item._id} className="orders-name-price">
                      <img
                        src={imagePath}
                        className="order-dish-img"
                        alt={product.productName}
                      />

                      <p className="title-dish">
                        {product.productName}
                      </p>

                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" />
                        <p>{item.itemQuantity}</p>
                        <img src="/icons/pause.svg" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemPrice * item.itemQuantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>

                  <img src="/icons/plus.svg" style={{ marginLeft: 20 }} />

                  <p>Delivery cost</p>
                  <p>${order.orderDelivery}</p>

                  <img src="/icons/pause.svg" style={{ marginLeft: 20 }} />

                  <p>Total</p>
                  <p>${order.orderTotal}</p>
                </Box>

                <Button
                value={order._id}
                  variant="contained"
                  color="secondary"
                  className="cancel-button"
                  onClick={deleteOrderHandler}

                >
                  Cancel
                </Button>

                <Button
                 value={order._id}
                  variant="contained"
                  className="pay-button"
                  onClick={processOrderHandler}
                >
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}

        {(!pausedOrders || (pausedOrders.length === 0) && (
          <Box
            display="flex"
            justifyContent="center"
          >
            <img
              src="/icons/noimage-list.svg"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        ))}
      </Stack>
    </TabPanel>
  );
}


