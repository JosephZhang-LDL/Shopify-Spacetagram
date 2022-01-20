import React, { useState } from "react";
import moment from "moment";
import { Flex, Box, Heading, Text, Image, Tooltip } from "@chakra-ui/react";
import { AiFillHeart } from "react-icons/ai";


const Card = (props) => {

    const [liked, setLiked] = useState(false);

    return (
        <Flex flex="50%" px="1.5" pb="3">
            <Flex
                flexDir="column"
                bg="#323F4B"
                borderRadius="2px"
                _hover={{ boxShadow: "1px" }}
            >
                <Image borderRadius="2px 2px 0px 0px" src={props.url} height="30em" fit="cover" />
                <Box px="8" py="4">
                    <Flex flexDir="row" justifyContent="space-between" width="100%">
                        <Flex flexDir="column">
                            <Heading color="#F5F7FA" fontSize="24px">{props.title}</Heading>
                            <Text color="#F5F7FA" fontWeight="thin" fontSize="18px">{moment(props.date).format("MMM Do, YYYY")}</Text>
                        </Flex>
                        <Flex>
                            <Tooltip label={liked ? "Unlike" : "Like"} hasArrow placement="top">
                                <span>
                                    <AiFillHeart
                                        className={liked ? "like-picture" : "unlike-picture"}
                                        size="34px"
                                        onClick={() => setLiked(!liked)}
                                        _hover={{ cursor: "pointer" }} />
                                </span>
                            </Tooltip>
                        </Flex>
                    </Flex>
                    <Text color="#E4E7EB" fontSize="14px">{props.explanation}</Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Card;