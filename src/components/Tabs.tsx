import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Box, useColorMode, Button } from '@chakra-ui/react'
import UserTable from './UserTable';

type userInfo = {
    date: string,
    applied: number,
    interviewed: number,
    tasks: number,
    rejected: number
}

const PersonTabs = () => {
    const mdAshraf: userInfo[] = [
        { date: "20/12/2022", applied: 0, interviewed: 1, tasks: 0, rejected: 5 },
        { date: "21/12/2022", applied: 5, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "22/12/2022", applied: 7, interviewed: 1, tasks: 0, rejected: 0 },
        { date: "23/12/2022", applied: 5, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "24/12/2022", applied: 6, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "25/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "26/12/2022", applied: 6, interviewed: 1, tasks: 2, rejected: 1 },
        { date: "27/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 1 },
        { date: "28/12/2022", applied: 8, interviewed: 1, tasks: 0, rejected: 1 },
        { date: "29/12/2022", applied: 8, interviewed: 1, tasks: 1, rejected: 1 },
        { date: "30/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "31/12/2022", applied: 5, interviewed: 0, tasks: 0, rejected: 0 },
    ]
    const mirzaAdnan: userInfo[] = [
        { date: "20/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "21/12/2022", applied: 10, interviewed: 1, tasks: 0, rejected: 0 },
        { date: "22/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "23/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 1 },
        { date: "24/12/2022", applied: 10, interviewed: 1, tasks: 0, rejected: 0 },
        { date: "25/12/2022", applied: 0, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "26/12/2022", applied: 20, interviewed: 1, tasks: 2, rejected: 0 },
        { date: "27/12/2022", applied: 0, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "28/12/2022", applied: 0, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "29/12/2022", applied: 0, interviewed: 1, tasks: 2, rejected: 1 },
        { date: "30/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "31/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 0 },
    ]
    const mdMuzahid: userInfo[] = [
        { date: "20/12/2022", applied: 6, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "21/12/2022", applied: 11, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "22/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 1 },
        { date: "23/12/2022", applied: 0, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "24/12/2022", applied: 0, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "25/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "26/12/2022", applied: 10, interviewed: 0, tasks: 0, rejected: 1 },
        { date: "27/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 1 },
        { date: "28/12/2022", applied: 8, interviewed: 0, tasks: 1, rejected: 0 },
        { date: "29/12/2022", applied: 10, interviewed: 0, tasks: 1, rejected: 1 },
        { date: "30/12/2022", applied: 7, interviewed: 0, tasks: 0, rejected: 0 },
        { date: "31/12/2022", applied: 3, interviewed: 0, tasks: 1, rejected: 0 },
    ]

    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div>
            <Heading
                mt={5}
                bgGradient='linear(to-r, #9233ab, #24E0DA)'
                bgClip='text'
            >
                Data Table of Group I members
                <Button marginY='2' marginLeft='20' colorScheme='teal' variant='outline' size='sm' onClick={toggleColorMode}>
                {(colorMode === 'light') ? 'Dark' : 'Light'}
            </Button>
            </Heading>
            <Box p={10}>
                <Tabs variant='enclosed'>
                    <TabList>
                        <Tab>MD Ashraf</Tab>
                        <Tab>Mirza Adnan</Tab>
                        <Tab>MD Muzahid</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <UserTable informations={mdAshraf} name='MD Ashraf' />
                        </TabPanel>
                        <TabPanel>
                            <UserTable informations={mirzaAdnan} name='Mirza Adnan' />
                        </TabPanel>
                        <TabPanel>
                            <UserTable informations={mdMuzahid} name='MD Muzahid' />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </div>
    );
}

export default PersonTabs;