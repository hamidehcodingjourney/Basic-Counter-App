import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          width: 400,
          height: 100,
          borderRadius: 2,
          bgcolor: "text.disabled",
          display: "flex",
          alignItems: "center",
          mx: "auto",
          my: 16,
        }}
      >
        <Button
          onClick={() => dispatch(decrement)}
          variant="contained"
          color="error"
          size="large"
          sx={{
            fontWeight: 700,
          }}
        >
          Decrement
        </Button>
        <Typography
          variant="button"
          color="common.white"
          sx={{
            display: "inline",
            px: 2,
            m: "auto",
            fontSize: "h4.fontSize",
            fontWeight: 700,
          }}
        >
          {counter}
        </Typography>
        <Button
          onClick={() => dispatch(increment)}
          variant="contained"
          color="success"
          size="large"
          sx={{
            fontWeight: 700,
          }}
        >
          Increment
        </Button>
      </Box>
    </div>
  );
}

export default App;
