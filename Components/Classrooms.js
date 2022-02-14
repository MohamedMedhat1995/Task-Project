import React, { useEffect, useState } from 'react';
import { Table } from './Table';
import axios from 'axios'
import "./button.css";

export const Classrooms = () => {
    const perPage = 5
    const headers = {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjQsImRhdGEiOnsidHlwZSI6InN1cGVyIn0sImlhdCI6MTYxODI1MzQyMn0.UVe4F4aXDfp09JYsK3vnUuGHusGpeFYN5-zNqKKKpvo'}
    

    const [lastPage, setLastPage] = useState(1000)
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const [sort, setSort] = useState("asc")

    useEffect(() => {
        getData()
    },[page, search, sort])

    function onClickPrevious() {
        if (page !== 1){
            setPage(page-1)
        }
    }
    
    function onClickNext () {
        setPage(page+1)
    }

    function getData() {
        let body = {page, perPage, sortBy:{field:"title", direction:sort}, query: search}
        axios.post('https://stag.api.admin.eduact.me/api/admin/classroom/all', body, {headers}).then((res) => {
            // if (res) {
            //     setData(res.data)
            // }
            console.log(res.data)
            setData(res.data.data)
            setLastPage(res.data.meta.last_page)
        })
    }

    function handlePageChange (page) {
        setPage(page)
    }

    console.log(search)

    return (
        <div>
            <div class= "container">
                <select class="data-container" value={search} onChange={(e) => setSearch(e.target.value)}>
                    <option value={""}>All Data</option>
                    <option value={"Chemistry"}>Chemistry</option>
                    <option value={"Physics"}>Physics</option>
                    <option value={"أحياء"}>أحياء</option>
                </select>
                <select class="srt-container" value = {sort} onChange={(e) => setSort(e.target.value)}>
                    
                    <option value={"asc"}>Ascending</option>
                    <option value={"desc"}>Descending</option>
                </select>
            </div>
                <Table data={data} page={page} onChangePage={handlePageChange}/>
                <div class="btn-container">
                    <button class="prv" onClick={onClickPrevious} disabled={page === 1}>Previous</button>
                    <button class="nxt" onClick={onClickNext}disabled ={page === lastPage}>Next</button>
                </div>
        </div>
  )
}
