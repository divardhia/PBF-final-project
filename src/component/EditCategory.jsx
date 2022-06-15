import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { ref, update, onValue } from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const EditCategory = () => {
    const [namaCategory, setnCategory] = useState('');
    const navigate = useNavigate();
    const { uid } = useParams();

    useEffect(() => {
        getCategory();
    }, []);

    const getCategory = () =>{
        console.log(uid);
        onValue(ref(db, `/category/${uid}`), snapshot => {
            const state = snapshot.val();
            if (state !== null) {
                console.log(state);
                setnCategory(state.namaCategory);
            } else {
                console.log('data tidak masuk');
            }
        });
    }

    const updateCategory = () => {
        try {
            update(ref(db, `/category/${uid}`), { namaCategory });
        } catch (error) {
            console.log(error.message);
        }

        navigate('/list_category/')
    }

    return (
        <div className="container-sm">
                <h2 className="head">Edit Category</h2><hr />
                <form onSubmit={updateCategory}>
                    <div className="mb-3">
                        <label htmlFor="nama" className="form-label">Nama Category</label>
                        <input type="text" className="form-control" id="nama" required
                            placeholder="Nama" value={namaCategory} onChange={(e) => setnCategory(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary btn-lg">Update</button>
                        <Link to={'/list_category/'} className='btn btn-danger btn-lg'>Cancel</Link>
                    </div>
                </form>
            </div>
    );
}

export default EditCategory;