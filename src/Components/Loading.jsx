import React from "react";

import { Spinner, Text } from '@chakra-ui/react';


const Loading = (props) => {
    return (
        <div className="loading-section">
            <Spinner
                thickness='3px'
                color="white"
                size="xl"
            />
            <Text color="white">Loading Results...</Text>
        </div>
    )
};

export default Loading;