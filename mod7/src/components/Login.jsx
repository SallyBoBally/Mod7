import { useState } from "react";
import { Box, Typography,TextField, Button, T } from "@mui/material";

function Login() {
    return (
        <Box sx={{ bgcolor: '#efefef', minWidth: 300, borderRadius: 4, }}>
            <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Username"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Password"
          margin="normal"
          type="password"
          variant="outlined"
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Box>
  );
}

export default Login;