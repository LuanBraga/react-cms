// import Icon from "@mdi/react"
// import { mdiOpenInNew } from '@mdi/js';

// import {useMemo} from "react"
import { useTable, Column, TableInstance } from "react-table"

import * as T from "./Table.styles"


export default function Table<T extends Object>({instance}: {instance: TableInstance<T>}){
    

    //UseTable recebe data e columns "memoizados"
    //UseTable retorna um obj table instance
    //Esse objeto contém tudo que é necessário para contruir uma tabela.
    // const tableInstance = useTable<DataType>({data, columns})

    const {
        getTableProps,
        getTableBodyProps,
        prepareRow,
        headerGroups,
        rows,
    } = instance
    
    return(
        //aplicando as propriedades da tabela
        <T.TableWrapper cellPadding='0' cellSpacing='0' {...getTableProps()}>
            <T.Heading>
                { //percorrendo através das linhas de cabeçalho
                    headerGroups.map(headerGroup => (
                        //aplicando as propriedades das linhas de cabeçalho
                        <T.HeadingRow {...headerGroup.getHeaderGroupProps()}>
                            {//percorrendo através dos cabeçalhos em cada linha
                                headerGroup.headers.map(column => (
                                    //applicando as propriedades da célula de cabeçalho
                                    <T.HeadingCell {...column.getHeaderProps()}>
                                        {//renderizando o cabeçalho
                                            column.render('Header')
                                        }
                                    </T.HeadingCell>
                                ))   
                            }
                        </T.HeadingRow>
                    ))
                }
            </T.Heading>
            <T.Body {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return <T.BodyRow {...row.getRowProps()}>
                            {
                                row.cells.map(cell => {
                                    return <T.BodyCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </T.BodyCell>
                                })
                            }
                        </T.BodyRow>
                    })
                }
            </T.Body>
        </T.TableWrapper>
    )
}