import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import './table.css'
import axios from 'axios'

export const BasicTable = ({data, page, onChangePage}) => {

    function onClickPrevious() {
        if (page !== 0){
            page--
            onChangePage(page)
        }
    }
    
    function onClickNext () {
        page++
        onChangePage(page)
    }


    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </table>
            <button onClick={onClickPrevious}>Previous</button>
            <button onClick={onClickNext}>Next</button>
        </div>
    );
}




// export const BasicTable = () => {

//     const columns = useMemo (() => COLUMNS, [])
//     const data = useMemo (() => MOCK_DATA, [])
    
//     const tableInstance = useTable({
//         columns,
//         data
//     })

//     const {
//         getTableProps, 
//         getTableBodyProps, 
//         headerGroups, 
//         rows, 
//         prepareRow
//     } = tableInstance



//     return (
//         <table {...getTableProps()}>
//             <thead>
//                 {
//                     headerGroups.map((headerGroup) => (
//                         <tr {...headerGroup.getHeaderGroupProps()}>
//                             {
//                                 headerGroup.headers.map( (column) => (
//                                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//                                 ))
//                             }
                            
//                         </tr>
//                     ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {
//                     rows.map(row => {
//                         prepareRow(row)
//                         return (
//                             <tr {...row.getRowProps()}>
//                                 {
//                                     row.cells.map(cell => {
//                                         return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                     })
//                                 }
                                
//                             </tr>           
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//   )
// }
