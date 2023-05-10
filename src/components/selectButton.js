import React from "react";
import { makeStyles } from "tss-react/mui";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles()((theme) => {
    return {
      button: {
        border: "1px solid #B2A4FF",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#B2A4FF" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          backgroundColor: "#B2A4FF",
          color: "black",
        },
        width: "22%",
        margin: 5,
      },
    };
  });
  const { classes } = useStyles();
  return (
    <span onClick={onClick} className={classes.button}>
      {children}
    </span>
  );
};

export default SelectButton;
