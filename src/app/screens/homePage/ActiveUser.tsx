import React from "react";
import Card from "@mui/joy/Card";
import { CssVarsProvider, Typography } from "@mui/joy";
import { Box, Container, Stack } from "@mui/material";
import CardOverflow from "@mui/joy/CardOverflow";
import AspectRatio from "@mui/joy/AspectRatio";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retriveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

// Zaxira rasmlar (public/img/users/ ichida)
const fallbackImages = [
  "/img/users/user1.jpeg",
  "/img/users/user2.jpeg",
  "/img/users/user3.jpeg",
  "/img/users/user4.jpeg",
];

// Redux Selector
const topUsersRetriever = createSelector(retriveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  console.log("topUsers soni:", topUsers.length, topUsers);

  return (
    <div className={"active-users-frame"}>
      <Container>
        <Stack className="main">
          <Box className="category-title">Active Users</Box>

          <Stack className="cards-frame" direction="row">
            <CssVarsProvider>
              {topUsers?.length === 0 ? (
                <Box className="no-data">No Active Users!</Box>
              ) : (
                topUsers.map((member: Member, index: number) => {
                  const fallback = fallbackImages[index % fallbackImages.length];
                  const imagePath = member.memberImage
                    ? `${serverApi}/${member.memberImage}`
                    : fallback;

                  return (
                    <Card key={member._id} variant="outlined" className="user-card">
                      <CardOverflow>
                        <AspectRatio ratio={1}>
                          <img
                            src={imagePath}
                            alt={member.memberNick}
                            onError={(e) => {
                              e.currentTarget.onerror = null; // cheksiz takrorlanmasin
                              e.currentTarget.src = fallback;
                            }}
                          />
                        </AspectRatio>
                      </CardOverflow>

                      <Typography className="user-name">
                        {member.memberNick}
                      </Typography>
                    </Card>
                  );
                })
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}