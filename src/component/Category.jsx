import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase/config";
import { ref, set } from "firebase/database";

const Category = () => {
    const [namaCategory, setnCategory] = useState('');
    const navigate = useNavigate();

    const saveCategory = () => {
        let uid = new Date().getTime().toString();
        console.log(uid);
        try {
            set(ref(db, `/category/${uid}`), { uid, namaCategory });
        } catch (error) {
            console.log(error.message);
        }
        
        navigate("/list_category");
    }

    return (
        <div className="container-sm">
            <h2 className="head"> Categoty </h2><hr />
            <form onSubmit={saveCategory}>
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">Nama Category</label>
                    <input type="text" className="form-control" id="nama" required
                        placeholder="Nama" value={namaCategory} onChange={(e) => setnCategory(e.target.value)} />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary btn-lg">Save</button>
                </div>
            </form>
        </div>
    )
}

export default Category;