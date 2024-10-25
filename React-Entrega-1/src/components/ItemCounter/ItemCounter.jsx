import { useEffect, useState, useRef } from "react";
import { Flex, Button, Text } from "@chakra-ui/react";

import styles from '../../../styles/Detail.module.css';

export const ItemCounter = ()=>{
    
    const [state, setState] = useState(0);

    const Añadir = () =>{
        setState(state + 1);
    };
    
    const Descartar = () => {
        setState(state -1);
    };

    useEffect(() => {
        console.log("useEffect con dependencias vacias");
    }, []);


    return (
        <Flex className={styles.contador}>
        <Button onClick={Descartar}>-</Button>
        <Text>{state}</Text>
        <Button onClick={Añadir}>+</Button>
        </Flex>
    );
    };  