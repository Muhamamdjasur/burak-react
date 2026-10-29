import React from "react";
import { Box, Card, Container, Stack, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Divider from "../../components/divider";

const newDishes = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
];

export default function NewDishes() {
  return (
    <div className={"new-products-frame"}>
      <Container>
        <Stack className={"main"}>
          <Box className={"category-title"}>Fresh Menu</Box>
          <Stack className={"cards-frame"}>
            {newDishes.length !== 0 ? (
              newDishes.map((ele) => {
                return (
                  <Card
                    key={ele.imagePath}
                    variant="outlined"
                    className={"card"}
                  >
                    <Box className={"product-image"}>
                      <div className="product-sale">Normal size</div>
                      <img src={ele.imagePath} alt="" />
                    </Box>

                    <Box className="product-detail">
                      <Stack className="info">
                        <Stack direction={"row"}>
                          <Typography className={"title"}>
                            {ele.productName}
                          </Typography>
                          <Divider width="2" height="24" bg="#d9d9d9" />
                          <Typography className={"price"}>$12</Typography>
                        </Stack>
                        <Stack>
                          <Typography className={"views"}>
                            20
                            <VisibilityIcon
                              sx={{ fontSize: 20, marginLeft: "5px" }}
                            />
                          </Typography>
                        </Stack>
                      </Stack>
                    </Box>
                  </Card>
                );
              })
            ) : (
              <Box className="no-data">New products are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}