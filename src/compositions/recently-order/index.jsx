import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Link as MuiLink } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import { Link } from 'react-router-dom';
function createData(id, date, price, paymentStatus, deliveryStatus) {
    return {
        id, date, price, paymentStatus, deliveryStatus
    };
}

const rows = [
    createData(1, '2021-10-10', 100000, 'Đã thanh toán', 'Đã giao hàng'),
    createData(2, '2021-10-10', 123456, 'Đã thanh toán', 'Đã giao hàng'),
    createData(3, '2021-10-10', 123123, 'Đã thanh toán', 'Đã giao hàng'),
    createData(4, '2021-10-10', 436465, 'Đã thanh toán', 'Đã giao hàng'),
    createData(5, '2021-10-10', 456234, 'Đã thanh toán', 'Đã giao hàng'),
    createData(6, '2021-10-10', 56523, 'Đã thanh toán', 'Đã giao hàng'),
    createData(7, '2021-10-10', 1111, 'Đã thanh toán', 'Đã giao hàng'),
    createData(8, '2021-10-10', 12321312, 'Đã thanh toán', 'Đã giao hàng'),
    createData(9, '2021-10-10', 45464, 'Đã thanh toán', 'Đã giao hàng'),
    createData(10, '2021-10-10', 123123, 'Đã thanh toán', 'Đã giao hàng'),
    createData(11, '2021-10-10', 12312, 'Đã thanh toán', 'Đã giao hàng'),
];

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'id',
        numeric: false,
        disablePadding: false,
        label: 'Mã đơn hàng',
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: false,
        label: 'Ngày đặt hàng',
    },
    {
        id: 'price',
        numeric: false,
        disablePadding: false,
        label: 'Thành tiền',
    },
    {
        id: 'paymentStatus',
        numeric: false,
        disablePadding: false,
        label: 'Trạng thái thanh toán',
    },
    {
        id: 'deliveryStatus',
        numeric: false,
        disablePadding: false,
        label: 'Vận chuyển',
    },
];

function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead sx={{ bgcolor: "primary.light" }}>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={"center"}
                        sortDirection={orderBy === headCell.id ? order : false}
                        sx={{ fontWeight: "bold" }}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

export default function EnhancedTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.name);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    return (
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={'medium'}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody>
                            {visibleRows.map((row, index) => {
                                return (
                                    <TableRow
                                        hover
                                        onClick={(event) => handleClick(event, row.name)}
                                        tabIndex={-1}
                                        key={index}
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        <TableCell align="center">
                                            <MuiLink component={Link} to={`/user/purchase/${row.id}`}>
                                                #{row.id}
                                            </MuiLink>
                                        </TableCell>
                                        <TableCell align="center">{row.date}</TableCell>
                                        <TableCell align="center">{row.price}</TableCell>
                                        <TableCell align="center">
                                            <CircleIcon sx={{ color: "success.light", fontSize: 15, mr: 1 }} />
                                            {row.paymentStatus}
                                        </TableCell>
                                        <TableCell align="center">
                                            <CircleIcon sx={{ color: "success.light", fontSize: 15, mr: 1 }} />
                                            {row.deliveryStatus}
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 53 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    labelRowsPerPage={'Số hàng hiển thị:'}
                    labelDisplayedRows={({ from, to, count }) =>
                        `${from}-${to} của ${count !== -1 ? count : `Nhiều hơn ${to}`}`}
                />
            </Paper>
        </Box>
    );
}