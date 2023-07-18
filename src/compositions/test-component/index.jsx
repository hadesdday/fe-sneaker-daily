// import { Button, Stack, Typography } from '@mui/material';
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrentGenderOptions } from '../../store/filter-product-list/filter.selector';
// import { setFilterOptions } from '../../store/filter-product-list/filter.action';

// function TestComponent(props) {
//     const dispatch = useDispatch();
//     const currentFilterOptions = useSelector(
//         selectCurrentGenderOptions
//     );

//     function abc() {
//         console.log(currentFilterOptions);
//     }

//     function setFilter() {
//         dispatch(setFilterOptions("gender", "men"));
//     }

//     return (
//         <Stack direction={"row"} spacing={2}>
//             <Typography>
//                 {JSON.stringify(currentFilterOptions)}
//             </Typography>
//             <Button variant='contained' onClick={abc}>get filter</Button>
//             <Button variant='contained' onClick={setFilter}>set filter</Button>
//         </Stack>
//     );
// }

// export default TestComponent;