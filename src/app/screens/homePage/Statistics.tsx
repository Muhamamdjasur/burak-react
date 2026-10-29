import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Devider from "../../components/divider";

export default function Statistics() {
  return (
    <div className="static-frame ">
      <Container>
        <Stack className="info">
          <Stack className="static-box">
            <Box className="static-num">12</Box>
            <Box className="static-text">Restaurants</Box>
          </Stack>

          <Devider height="64" width="2" bg="#E3C08D" />

          <Stack className="static-box">
            <Box className="static-num">8</Box>
            <Box className="static-text">Expirence</Box>
          </Stack>

          <Devider height="64" width="2" bg="#03c703ff" />

          <Stack className="static-box">
            <Box className="static-num">50+</Box>
            <Box className="static-text">Menu</Box>
          </Stack>

          <Devider height="64" width="2" bg="#097327ff" />

          <Stack className="static-box">
            <Box className="static-num">200+</Box>
            <Box className="static-text">Clients</Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
