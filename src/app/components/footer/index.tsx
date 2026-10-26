import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Footers = styled.div`
  width: 100%;
  min-height: 590px;
  display: flex;
  background: #343434;
  background-size: cover;
`;

export default function Footer() {
  const authMember = null;

  return (
    <Footers>
      <Container>
        <Stack direction="row" sx={{ mt: "94px" }}>
          <Stack direction="column" sx={{ width: "340px" }}>
            <Box>
              <img width={"100px"} src={"/icons/burak.svg"} alt="Burak logo" />
            </Box>
            <Box className={"foot-desc-txt"}>
              Focusing on the gourmet Turkish breakfast as well as the youth
              society, CZN Burak Gurme aims to bring Turkish cuisine back. CZN
              Burak Gurme creates an illusion with its cuisine.
            </Box>
            <Box className="sns-context">
              <img src={"/icons/facebook.svg"} alt="Facebook" />
              <img src={"/icons/twitter.svg"} alt="Twitter" />
              <img src={"/icons/instagram.svg"} alt="Instagram" />
              <img src={"/icons/youtube.svg"} alt="YouTube" />
            </Box>
          </Stack>
          <Stack direction="row" sx={{ ml: "288px" }}>
            <Stack>
              <Box className={"foot-category-title"}>Bo'limlar</Box>
              <Box className={"foot-category-link"}>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                {authMember && <Link to="/orders">Orders</Link>}
                <Link to="/help">Help</Link>
              </Box>
            </Stack>
            <Stack sx={{ ml: "100px" }}>
              <Box className={"foot-category-title"}>Find us</Box>
              <Box className={"foot-category-link"}>
                <Box className={"find-us"}>
                  <span>L.</span>
                  <div>Downtown, Dubai</div>
                </Box>
                <Box className={"find-us"}>
                  <span>P.</span>
                  <div>+971 4 554 7777</div>
                </Box>
                <Box className={"find-us"}>
                  <span>E.</span>
                  <div>devexuz@gmail.com</div>
                </Box>
                <Box className={"find-us"}>
                  <span>H.</span>
                  <div>Visit 24 hours</div>
                </Box>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack className={"foot-divider"}></Stack>
        <Stack className={"copyright-txt"}>
          © Copyright Devex Global, All rights reserved.
        </Stack>
      </Container>
    </Footers>
  );
}
