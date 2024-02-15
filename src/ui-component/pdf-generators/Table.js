import React from "react";
import { Box } from "@mui/material";

export default function Table({
  titleColor = "#e5e5e5",
  headerColor = "#1f497d", // #5b9bd5
  bodyColor = "#e5e5e5",
  spacing = "5px",
  headerData = [
    "الخطة التأمينية",
    // "التحمل السنوي (الجنية الإسترليني)",
    // "الحد األقصى السنوي (الجنية اإلسترليني)",
  ],
  bodyData = [
    {
      a: "لتأمين الطبي العالمي",
      //   b: "5,000.00",
      //   c: "1,500,000.00",
    },
    {
      a: "لتأمين الطبي العالمي",
    },
    {
      a: "لتأمين الطبي العالمي",
    },
  ],
}) {
  const a = "7V-1332111-60001-323525-M";
  const b = "13/10/2023";
  const styles = {
    container: {
      breakInside: "avoid",
    },
    title: {
      with: "100%",
      position: "relative",
      top: "5px",
      padding: "8px",
      backgroundColor: titleColor,
      color: "black",
      textAlign: "right",
    },
    table: {
      borderCollapse: "separate",
      borderSpacing: `0 ${spacing}`,
      width: "100%",
      textAlign: "right",
    },
    // head
    th: {
      border: "none",
      padding: "4px",
      backgroundColor: headerColor,
      color: "white",
      textAlign: "right",
      height: "15px",
    },
    // body
    td: {
      border: "none",
      padding: "8px",
      backgroundColor: bodyColor,
      color: "black",
      textAlign: "right",
    },
  };
  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>{`رقم الوثيقة: ${a} الصادرة في: ${b}`}</Box>
      <Box component="table" sx={styles.table}>
        <Box component="thead">
          <Box component="tr">
            {headerData.map((item, index) => (
              <Box
                component="th"
                sx={{
                  ...styles.th,
                  width:
                    headerData.length === 5
                      ? "20%"
                      : headerData.length === 4
                      ? "25%"
                      : headerData.length === 3
                      ? "23%"
                      : headerData.length === 2
                      ? "50%"
                      : "100%",
                }}
                colSpan={
                  //   headerData.length === 1
                  //     ? "3"
                  //     : headerData.length === 2 && index === 0
                  //     ? "2"
                  //     : "1"
                  headerData.length === 2 && index === 0 ? "2" : "1"
                }
                key={index}
              >
                {item}
              </Box>
            ))}
          </Box>
        </Box>
        <Box component="tbody">
          {bodyData.map((item) => {
            return (
              <Box component="tr">
                {Object.entries(item).map(([key, value]) => (
                  <Box
                    component="td"
                    sx={{
                      ...styles.td,
                      width:
                        headerData.length === 5
                          ? "20%"
                          : headerData.length === 4
                          ? "25%"
                          : headerData.length === 3
                          ? "23%"
                          : headerData.length === 2
                          ? "50%"
                          : "100%",
                    }}
                    colSpan={
                      //   Object.keys(item).length === 1
                      //     ? "3"
                      //     : headerData.length === 2 && index === 0
                      //     ? "2"
                      //     : "1"
                      Object.keys(item).length === 2 && index === 0 ? "2" : "1"
                    }
                  >
                    {value}
                  </Box>
                ))}
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

/* tr:nth-child(odd) {
    background-color: #e5e5e5;
  } */
