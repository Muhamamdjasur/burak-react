import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-title">Popular Dishes</Box>
          <Stack className="cards-frame">
            {list.length !== 0 ? (
              list.map((ele) => {
                return (
                  <Card
                    key={ele.imagePath}
                    className={"card"}
                    sx={{
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: "12px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={ele.imagePath}
                      alt=""
                      sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      className={"card-cover"}
                      sx={{ position: "absolute", inset: 0 }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        flexGrow: 1,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-end",
                        p: 2,
                      }}
                    >
                      <Stack
                        direction="row"
                        sx={{ justifyContent: "space-between" }}
                      >
                        <Typography
                          sx={{
                            color: "#fff",
                            fontSize: "1.25rem",
                            fontWeight: 700,
                            mb: 1,
                          }}
                        >
                          {ele.productName}
                        </Typography>
                        <Typography
                          component="div"
                          sx={{
                            color: "#cdd7e1",
                            fontWeight: 500,
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          20
                          <VisibilityIcon
                            sx={{ fontSize: 25, marginLeft: "5px" }}
                          />
                        </Typography>
                      </Stack>
                    </Box>
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        display: "flex",
                        alignItems: "center",
                        gap: 1.5,
                        px: 2,
                        height: "60px",
                        borderTop: "1px solid rgba(255, 255, 255, 0.3)",
                        color: "#cdd7e1",
                      }}
                    >
                      <DescriptionOutlinedIcon />
                      <Typography sx={{ color: "#cdd7e1" }}>
                        This is delicious meal
                      </Typography>
                    </Box>
                  </Card>
                );
              })
            ) : (
              <Box className="no-data">Popular dishes are not available!</Box>
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}