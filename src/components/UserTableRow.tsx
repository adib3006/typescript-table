import { Td, Tr } from "@chakra-ui/react";

type Row = {
    date: string,
    applied: number,
    interviewed: number,
    tasks: number,
    rejected: number
}

const UserTableRow = (props: Row) => {
    
    return (
        <Tr>
            <Td>{props.date}</Td>
            <Td isNumeric>{props.applied}</Td>
            <Td isNumeric>{props.interviewed}</Td>
            <Td isNumeric>{props.tasks}</Td>
            <Td isNumeric>{props.rejected}</Td>
        </Tr>
    )
}

export default UserTableRow;