import {useMemo} from "react"
import { useTable, Column } from "react-table"

export interface DataInterface{
    col1: string,
    col2: string,
}

export default function Table(){
    const data = useMemo<DataInterface[]>(
        ()=> [
            {
                col1: 'Hello',
                col2: 'World'
            },
            {
                col1: 'React-table',
                col2: 'rocks'
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
        ],
        []
    )

    const columns = useMemo<Column<DataInterface>[]>(
        ()=> [
            {
                Header: 'col1'
            },
            {
                Header: 'Column 2',
                acessor: 'col2'
            },
        ],
        []
    )

    const tableInstance = useTable<DataInterface>({data, columns})
    
    return(
        <table>
            <thead>
                <tr>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                </tr>
            </tbody>
        </table>
    )
}