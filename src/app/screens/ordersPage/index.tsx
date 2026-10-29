import { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import React from "react";
import { TabContext, TabPanel } from "@mui/lab";
import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";
import { Member } from "../../../lib/types/member";
import { Product } from "../../../lib/types/product";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";
import { useGlobals } from "../../hooks/useGlobal";
import "../../../css/order.css";
import { useHistory } from "react-router-dom";
// REDUX ACTIONS
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const { orderBuilder, authMember } = useGlobals();
  const history = useHistory();
  const [value, setValue] = useState("1");
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });

  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry, orderBuilder]);

  /**  HANDLER **/
  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  if (!authMember) history.push("/");

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack direction="row" spacing={2}>
          {/* LEFT SIDE */}
          <Stack className="order-left">
            <TabContext value={value}>
              <Box className="order-nav-frame">
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    className="table_list"
                  >
                    <Tab label="PAUSED ORDERS" value="1" />
                    <Tab label="PROCESS ORDERS" value="2" />
                    <Tab label="FINISHED ORDERS" value="3" />
                  </Tabs>
                </Box>
              </Box>

              <Stack className="order-main-content">
                <TabPanel value="1">
                  <PausedOrders setValue={setValue} />
                </TabPanel>

                <TabPanel value="2">
                  <ProcessOrders setValue={setValue} />
                </TabPanel>

                <TabPanel value="3">
                  <FinishedOrders />
                </TabPanel>
              </Stack>
            </TabContext>
          </Stack>

          {/* RIGHT SIDE */}
          <Stack className="order-right">
            {/* USER CARD */}
            <Box className="order-info-box">
              <Box className="member-box">
                <div className="order-user-img">
                  <img
                    src="/icons/default-user.svg"
                    className="order-user-avatar"
                  />
                </div>

                <div className="order-user-icon-box">
                  <img
                    src="/icons/user-badge.svg"
                    className="order-user-prof-img"
                  />
                </div>
              </Box>

              <span className="order-user-name">Albert</span>
              <span className="order-user-prof">User</span>

              <Box className="liner"></Box>
              <Box className="order-user-adress">
                <div style={{ display: "flex" }}>
                  <LocationOnIcon />
                  <span className="order-user-location-text">
                    User address...
                  </span>
                </div>
              </Box>
            </Box>

            {/* PAYMENT SECTION */}
            <Box className="payment-box">
              <div className="payment-input">
                <input
                  type="text"
                  placeholder="Card number : 5243 4090 2002 7495"
                />
              </div>

              <div className="payment-row">
                <div className="payment-input-small">
                  <input type="text" placeholder="07 / 24" />
                </div>

                <div className="payment-input-small">
                  <input type="password" placeholder="CVV : 010" />
                </div>
              </div>

              <div className="payment-input">
                <input type="text" placeholder="Justin Robertson" />
              </div>

              <div className="payment-logos">
                <img src="/icons/western-card.svg" />
                <img src="/icons/master-card.svg" />
                <img src="/icons/paypal-card.svg" />
                <img src="/icons/visa-card.svg" />
              </div>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
