import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";

export default function TransactionForm() {
  return (
    <Card sx={{ minWidth: 275, marginTop: 10 }}>
      <CardContent>
        <Typography variant="body2">
          body 2 text
          <br />
          {'text'}
        </Typography>
      </CardContent>
    </Card>
  );
}