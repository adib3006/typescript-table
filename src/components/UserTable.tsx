import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import UserTableRow from './UserTableRow';

type UserProps = {
    name : string,
    informations : {date: string,
        applied: number,
        interviewed: number,
        tasks: number,
        rejected: number}[]
}

const UserTable = (props : UserProps) => {

    const {informations} = props;

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Mr. {props.name}'s Job Related Data</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Date</Th>
                        <Th isNumeric>Total Applied Jobs</Th>
                        <Th isNumeric>Total Interviews</Th>
                        <Th isNumeric>Total Completed Tasks</Th>
                        <Th isNumeric>Total Number of Rejections</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        informations.map(d => <UserTableRow 
                            date={d.date} 
                            applied={d.applied} 
                            interviewed={d.interviewed}
                            tasks={d.tasks}
                            rejected={d.rejected}
                            />)
                    }
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th>Date</Th>
                        <Th isNumeric>Total Applied Jobs</Th>
                        <Th isNumeric>Total Interviews</Th>
                        <Th isNumeric>Total Completed Tasks</Th>
                        <Th isNumeric>Total Number of Rejections</Th>
                    </Tr>
                </Tfoot>
            </Table>
        </TableContainer>
    );
}

export default UserTable;