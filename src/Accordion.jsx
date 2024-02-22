import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const Accordion = () => {
  const topicDetails = [
    {
      id: 1,
      que: "What is Hacking?",
      ans: "Hacking refers to the unauthorized access, manipulation, or exploitation of computer systems, networks, or data."
    },
    {
      id: 2,
      que: "Hacking can take various forms",
      ans: "Hacking refers to the unauthorized access, manipulation, or exploitation of computer systems, networks, or data."
    },
    {
      id: 3,
      que: "What is Hacking?",
      ans: "Unauthorized Access, Malware Attacks, Phishing, Social Engineering"
    },
  ];

  const [getClick, setClick] = useState(null); // Initialize getClick state to null

  const handleClick = (index) => {
    setClick(index === getClick ? null : index); // Toggle getClick state based on the clicked index
  };

  return (
    <>
      {topicDetails.map((topic , index) => (
        <Box
          key={index}
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    {getClick === index ? <RemoveCircleIcon /> : <AddCircleIcon />}
                  </ListItemIcon>
                  <ListItemText>{topic.que}</ListItemText>
                </ListItemButton>
              </ListItem>
              {getClick === index && ( // Conditionally render the answer based on getClick state
                <ListItem>
                  <ListItemText>{topic.ans}</ListItemText>
                </ListItem>
              )}
            </List>
          </nav>
          <Divider />
        </Box>
      ))}
    </>
  );
};

export default Accordion;
