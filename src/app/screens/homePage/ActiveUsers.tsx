import React from "react";
import { Box, Card, Container, Stack } from "@mui/material";

const activeUsers = [
  { memberNick: "Martin", memberImage: "/img/martin.webp" },
  { memberNick: "Justin", memberImage: "/img/justin.webp" },
  { memberNick: "Rose", memberImage: "/img/rose.webp" },
  { memberNick: "Nusret", memberImage: "/img/nusret.webp" },
];

export default function ActiveUsers() {
  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Active Users</Box>
          <Stack className={"cards-frame"}>
            {activeUsers.length !== 0 ? (
              activeUsers.map((ele) => {
                return (
                  <Card
                    key={ele.memberNick}
                    variant="outlined"
                    className={"card"}
                  >
                    <img src={ele.memberImage} alt="" />
                    <Box className={"member-nickname"}>{ele.memberNick}</Box>
                  </Card>
                );
              })
            ) : (
              <Box className={"no-data"}>No Active Users!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}