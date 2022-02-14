import React, {useMemo} from 'react'
import './table.css'

export const Table = ({data, page, onChangePage}) => {

    


    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Category Id</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Type</th>
                </tr>
                {data.map((item, i) => (
                    <tr key={i}>
                        <td>{item.id}</td>
                        <td>{item.category_id}</td>
                        <td>{item.category.name}</td>
                        <td>{item.title}</td>
                        <td>{item.type}</td>
                    </tr>
                ))}
            </table>
            
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
