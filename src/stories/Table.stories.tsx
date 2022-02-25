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

// export type DataType = {
//     preview: React.ReactNode
//     col1: string
//     col2: string
//     actions: string
// }

// type Post = {
//     preview: React.ReactNode
//     col1: string
//     col2: string
//     actions: string
// }

type Post = {
    id: number
    title: string
    views: number
    author: {
        name: string
        avatar: string
    }
    conversions: {
        thousands: number
        percentage: number
    }
}

export function Default () {
    //É importante usar o useMemo() pra garantir que nosso "data" não seja recriado e recalculado a cada renderização
    const data = useMemo<Post[]>(
        () => [
            {
              author: {
                name: 'Daniel Bonifacio',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
              },
              id: 1,
              conversions: {
                percentage: 64.35,
                thousands: 607,
              },
              title: 'Como dobrei meu salário aprendendo somente React',
              views: 985415
            },
            {
              author: {
                name: 'Daniel Bonifacio',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
              },
              id: 2,
              conversions: {
                percentage: 64.35,
                thousands: 607,
              },
              title: 'React.js vs. React Native: a REAL diferença entre os dois',
              views: 985415
            },
            {
              author: {
                name: 'Daniel Bonifacio',
                avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNf0vAZLggJoZxGKpfOa3EBClHkwQmmvv9Lg&usqp=CAU'
              },
              id: 3,
              conversions: {
                percentage: 95.35,
                thousands: 845,
              },
              title: 'Como dobrei meu salário aprendendo somente React',
              views: 985415
            }
          ],
        []
    )

    //Setando as definições de coluna a serem passadas para useTable()
    const columns = useMemo<Column<Post>[]>(
        () => [
            {
                Header: '',
                accessor: 'id',
                Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09F'}/>
            },
            {
                Header: () => <div style={{textAlign: 'left'}}>Artigo</div>,
                accessor: 'title',
                Cell: (props) => <div style={{display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left'}}>
                    <img src={props.row.original.author.avatar} alt="" width={24} height={24}/>
                    {props.value}
                </div>
            },
            {
                Header: 'Views',
                accessor: 'views',
                Cell: (props) => <div style={{textAlign: 'right', fontWeight: '700', fontFamily: '"Roboto Mono", monospace'}}>{props.value.toLocaleString('PT-BR')}</div>
            },
            {
                Header: 'Conversões',
                accessor: 'conversions',
                Cell: (props) => <div style={{textAlign: 'right', display: 'flex', gap: '8px', fontWeight: '700', fontFamily: '"Roboto Mono", monospace'}}>
                    <span>{props.value.thousands}K</span>
                    <span style={{color: '#09F'}}>{props.value.percentage}%</span>
                </div>
            },
            {
                id: Math.random().toString(),
                Header: () => <div style={{textAlign: 'right'}}>Ações</div>,
                // accessor: 'id',
                Cell: () => <div style={{textAlign: 'right'}}>Todo: actions</div>
            },
        ],
        []
    )

    //UseTable recebe data e columns "memoizados"
    //UseTable retorna um obj table instance
    //Esse objeto contém tudo que é necessário para contruir uma tabela.
    const tableInstance = useTable<Post>({data, columns})
    
    return <Table<Post> instance={tableInstance}/>
}

export function NoData() {
    const data = useMemo<Post[]>(
        () => [],
          []
        )

        const columns = useMemo<Column<Post>[]>(
            () => [
                {
                    Header: '',
                    accessor: 'id',
                    Cell: () => <Icon path={mdiOpenInNew} size={'14px'} color={'#09F'}/>
                },
                {
                    Header: () => <div style={{textAlign: 'left'}}>Artigo</div>,
                    accessor: 'title',
                    Cell: (props) => <div style={{display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'left'}}>
                        <img src={props.row.original.author.avatar} alt="" width={24} height={24}/>
                        {props.value}
                    </div>
                },
                {
                    Header: 'Views',
                    accessor: 'views',
                    Cell: (props) => <div style={{textAlign: 'right', fontWeight: '700', fontFamily: '"Roboto Mono", monospace'}}>{props.value.toLocaleString('PT-BR')}</div>
                },
                {
                    Header: 'Conversões',
                    accessor: 'conversions',
                    Cell: (props) => <div style={{textAlign: 'right', display: 'flex', gap: '8px', fontWeight: '700', fontFamily: '"Roboto Mono", monospace'}}>
                        <span>{props.value.thousands}K</span>
                        <span style={{color: '#09F'}}>{props.value.percentage}%</span>
                    </div>
                },
                {
                    id: Math.random().toString(),
                    Header: () => <div style={{textAlign: 'right'}}>Ações</div>,
                    // accessor: 'id',
                    Cell: () => <div style={{textAlign: 'right'}}>Todo: actions</div>
                },
            ],
            []
        )

    const tableInstance = useTable<Post>({data, columns})
    
    return <Table<Post> instance={tableInstance}/>
}