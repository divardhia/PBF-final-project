import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import { onValue, ref, remove } from "firebase/database";

const ContactPage = () => {
    const [contact, setContact] = useState([]);

    const handleHapusContact = (idContact) => {        // fungsi yang meng-handle button action hapus data
        remove(ref(db, `/contacts/${idContact}`));
    }

    const getContacts = () => {
        onValue(ref(db, "/contacts/"), snapshot => {
            const state = snapshot.val();
            if (state !== null) {
                const arr = Object.values(state);
                setContact(arr);
            } else {
                setContact([]);
            }
            console.log(contact);
        });
    };

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <>
            <h3>List Contact</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nama</th>
                        <th>Email</th>
                        <th>Pesan</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contact.length > 0 ? (
                        contact.map(item => {
                            return (
                                <tr key={item.uid}>
                                    <td>{item.uid}</td>
                                    <td>
                                        {item.nama}
                                    </td>
                                    <td>{item.email}</td>
                                    <td>{item.pesan}</td>
                                    <td>
                                        <Link to={`/contact/edit/${item.uid}`} className='btn btn-info btn-sm'>Edit</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => { if (window.confirm('Apakah anda yakin menghapus contact ini?')) handleHapusContact(item.uid) }}>Delete</button>
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

export default ContactPage;
