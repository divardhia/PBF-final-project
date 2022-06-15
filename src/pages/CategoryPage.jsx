import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import { onValue, ref, remove } from "firebase/database";

const no =1;
const CategoryPage = () => {
    const [category, setCategory] = useState([]);

    const handleHapusCategory = (idCategory) => {        // fungsi yang meng-handle button action hapus data
        remove(ref(db, `/category/${idCategory}`));
    }

    const getCategory = () => {
        onValue(ref(db, "/category/"), snapshot => {
            const state = snapshot.val();
            if (state !== null) {
                const arr = Object.values(state);
                setCategory(arr);
            } else {
                setCategory([]);
            }
            console.log(category);
        });
    };

    useEffect(() => {
        getCategory();
    }, []);

    return (
        <>
            <h3>List Category</h3>
            <Link to={`form_category`} className='btn btn-info btn-sm'>Tambah</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {category.length > 0 ? (
                        category.map(item => {
                            return (
                                <tr key={item.uid}>
                                    <td>{item.uid}</td>
                                    <td>
                                        {item.namaCategory}
                                    </td>
                                    <td>
                                        <Link to={`/category/edit/${item.uid}`} className='btn btn-info btn-sm'>Edit</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => { if (window.confirm('Apakah anda yakin menghapus Category ini?')) handleHapusCategory(item.uid) }}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan={5}>Data Empty</td>
                        </tr>
                    )}
                </tbody>
            </Table>

        </>

    );
};

export default CategoryPage;
