import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, update, onValue } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditFeedback = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [pesan, setPesan] = useState('');
    const navigate = useNavigate();
    const { uid } = useParams();

    useEffect(() => {
        getFeedback();
    }, []);

    const getFeedback = () =>{
        onValue(ref(db, `/contacts/${uid}`), snapshot => {
            const state = snapshot.val();
            if (state !== null) {
                setNama(state.nama);
                setEmail(state.email);
                setPesan(state.pesan);
            } else {
                console.log('data tidak masuk');
            }
        });
    }

    const updateFeedback = () => {
        try {
            update(ref(db, `/contacts/${uid}`), { nama, email, pesan });
        } catch (error) {
            console.log(error.message);
        }

        navigate('/contact/')
    }

    return (
        <div className="container-sm">
                <h2 className="head">Edit Feedback</h2><hr />
                <form onSubmit={updateFeedback}>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama</label>
                        <input type="text" className="form-control" id="nama" required
                            placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" required
                            placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pesan" className="form-label">Pesan</label>
                        <textarea type="text" className="form-control" id="pesan" required
                            placeholder="Pesan" value={pesan} onChange={(e) => setPesan(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary btn-lg">Update</button>
                        <Link to={'/contact/'} className='btn btn-danger btn-lg'>Cancel</Link>
                    </div>
                </form>
            </div>
    );
}

export default EditFeedback;