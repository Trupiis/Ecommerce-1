import { useEffect, useState, useRef, useContext } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

import styles from '../../../styles/Detail.module.css';

import { CartContext } from "../context";

export const ItemCounter = ({item})=>{
    
    const [count, setCount] = useState(0);

    const {cartState, addItem, removeItem} = useContext(CartContext);

    const handleAddItem = () =>{
        const newCount = count + 1;
        setCount(newCount);
        addItem(item, newCount);

    };
    
    const handleRemoveItem = () =>{
        const newCount = count - 1;
        setCount(newCount);
        removeItem(item, newCount);
    };

    useEffect(() => {
        console.log("useEffect con dependencias vacias");
    }, []);


    return (
        <Flex className={styles.contador}>
        <Button onClick={handleRemoveItem}>-</Button>
        <Text>{count}</Text>
        <Button onClick={handleAddItem}>+</Button>
        </Flex>
    );
    };  