import "./App.css";
import { Box, Button, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";

function App() {
  const counter = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Box>
        <Button onClick={() => dispatch(decrement)}>Decrement</Button>
        <Typography>{counter}</Typography>
        <Button onClick={() => dispatch(increment)}>Increment</Button>
      </Box>
    </div>
  );
}

export default App;
