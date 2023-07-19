import { Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function TestComponent(props) {
    // const dispatch = useDispatch();
    // const currentFilterOptions = useSelector(
    //     selectCurrentGenderOptions
    // );

    // function abc() {
    //     console.log(currentFilterOptions);
    // }

    // function setFilter() {
    //     dispatch(setFilterOptions("gender", "men"));
    // }

    // let [searchParams, setSearchParams] = useSearchParams();
    // const params = {
    //     id: searchParams.get("id"),
    //     name: searchParams.get("name"),
    // }

    // const [state, setState] = useState({
    //     id: params.id,
    //     name: params.name
    // });

    // function handleSetNewState() {
    //     setSearchParams({
    //         id: "id" + Math.floor(Math.random() * 20),
    //         name: "rand" + Math.floor(Math.random() * 20)
    //     })

    // }

    // let count = 0;
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/todos/1")
    //         .then(response => response.json())
    //         .then(count++)
    //         .then(json => { console.log("call render", json); });
    //     setState({
    //         id: params.id,
    //         name: params.name
    //     })
    //     console.log("call render time", count);
    //     count = 0;
    // }, [searchParams])

    // function handleChange(event) {
    //     setSearchParams({
    //         ...state,
    //         [event.target.name]: event.target.value
    //     })
    // }

    return (
        <Stack direction={"column"} spacing={2}>
            {/* <Typography>
                {JSON.stringify(currentFilterOptions)}
            </Typography>
            <Button variant='contained' onClick={abc}>get filter</Button>
            <Button variant='contained' onClick={setFilter}>set filter</Button> */}
            {/* <TextField value={state.id} name='id' onChange={(e) => handleChange(e)} />
            <TextField value={state.name} name='name' onChange={(e) => handleChange(e)} />
            <Button variant='contained' onClick={handleSetNewState}>Set new value</Button> */}
        </Stack>
    );
}

export default TestComponent;