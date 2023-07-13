import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { Slide, Stack } from '@mui/material';
import React from 'react';
function ScrollToTop(props) {
    return (
        <Slide direction="up" in={props.visible} mountOnEnter unmountOnExit>
            <Stack direction={"column"}
                sx={{
                    position: "fixed",
                    right: 20,
                    bottom: 20,
                    borderRadius: "50%",
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "secondary.400",
                }}
                onClick={props.scrollToTop}
            >
                <KeyboardDoubleArrowUpIcon sx={{ color: "white" }} />
            </Stack>
        </Slide>
    );
}

export default ScrollToTop;