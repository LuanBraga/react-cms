import Icon from "@mdi/react";
import { mdiOpenInNew } from "@mdi/js"
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useMemo } from "react";
import Table from "../components/Table/Table";
import { Column, useTable } from "react-table";

export default {
    title: 'Components/Table',
    component: Table,
} as ComponentMeta<typeof Table>;

// const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

// export const Default = Template.bind({});
// Default.args = {
// };

export type DataType = {
    preview: React.ReactNode
    col1: string
    col2: string
    actions: string
}

export function Default () {
    //É importante usar o useMemo() pra garantir que nosso "data" não seja recriado e recalculado a cada renderização
    const data = useMemo<DataType[]>(
        () => [
            {
              col1: 'Hello',
              col2: 'World',
              actions: 'action',
              preview: <Icon 
                        size="14px"
                        color="#09F"
                        path={mdiOpenInNew}/>
            },
            {
              col1: 'react-table',
              col2: 'rocks',
              actions: 'action',
              preview: <Icon 
                        size="14px"
                        color="#09F"
                        path={mdiOpenInNew}/>
            },
            {
              col1: 'whatever',
              col2: 'you want',
              actions: 'action',
              preview: <Icon 
                        size="14px"
                        color="#09F"
                        path={mdiOpenInNew}/>
            },
          ],
          []
        )

    //Setando as definições de coluna a serem passadas para useTable()
    const columns = useMemo<Column<DataType>[]>(
        () => [
            {
                Header: '',
                accessor: 'preview',
            },
            {
                Header: 'Column 1',
                accessor: 'col1', //acessor é a chave do objeto em "data"
                Cell: (row) => <div style={{textAlign: 'right'}}>{row.value}</div>
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
                Cell: (row) => <div style={{textAlign: 'center'}}>{row.value}</div>
            },
            {
                Header: 'Actions',
                accessor: 'actions',
            },
        ],
        []
    )

    //UseTable recebe data e columns "memoizados"
    //UseTable retorna um obj table instance
    //Esse objeto contém tudo que é necessário para contruir uma tabela.
    const tableInstance = useTable<DataType>({data, columns})
    
    return <Table<DataType> instance={tableInstance}/>
}

export function NoData() {
    const data = useMemo<DataType[]>(
        () => [],
          []
        )

    const columns = useMemo<Column<DataType>[]>(
        () => [
            {
                Header: '',
                accessor: 'preview',
            },
            {
                Header: 'Column 1',
                accessor: 'col1', //acessor é a chave do objeto em "data"
                Cell: (row) => <div style={{textAlign: 'right'}}>{row.value}</div>
            },
            {
                Header: 'Column 2',
                accessor: 'col2',
                Cell: (row) => <div style={{textAlign: 'center'}}>{row.value}</div>
            },
            {
                Header: 'Actions',
                accessor: 'actions',
            },
        ],
        []
    )

    const tableInstance = useTable<DataType>({data, columns})
    
    return <Table<DataType> instance={tableInstance}/>
}