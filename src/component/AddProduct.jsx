import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { ref, set } from "firebase/database";
import { AuthContext } from "..";

const AddProduct = () => {
    const auth = useContext(AuthContext);
    const [nama, setNama] = useState('');
    const [ukuran, setUkuran] = useState('');
    const [stok, setStok] = useState('');
    const [harga, setHarga] = useState('');
    const [fileGambar, setGambar] = useState('');
    const navigate = useNavigate();

    const saveProduct = async (e) => {
        e.preventDefault();

        const data = new FormData();

        for (let i = 0; i < fileGambar.length; i++) {
            data.append('file', fileGambar[i]);
        }

        await axios.post('//localhost:8000/upload', data)
            .then((response) => {
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });

        let gambar = `./images/${fileGambar[0]['name']}`;
        let uid = new Date().getTime().toString();
        console.log(uid);
        try {
            set(ref(db, `/product/${uid}`), { uid, nama, ukuran, stok, harga, gambar });
        } catch (error) {
            console.log(error.message);
        }

        auth.setLoggedIn(true);
        navigate("/product");
    }

    return (
        <div className="container-sm">
            <h2 className="head">Tambah Product</h2><hr />
            <form onSubmit={saveProduct}>
                <div className="mb-3">
                    <label htmlFor="nama" className="form-label">Nama</label>
                    <input type="text" className="form-control" id="nama" required
                        placeholder="Nama" value={nama} onChange={(e) => setNama(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="ukuran" className="form-label">Ukuran</label>
                    <input type="text" className="form-control" id="ukuran" required
                        placeholder="Ukuran" value={ukuran} onChange={(e) => setUkuran(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="stok" className="form-label">Stok</label>
                    <input type="number" className="form-control" id="stok" required
                        placeholder="Stok" value={stok} onChange={(e) => setStok(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="harga" className="form-label">Harga</label>
                    <input type="number" className="form-control" id="harga" required
                        placeholder="Harga" value={harga} onChange={(e) => setHarga(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="gambar" className="form-label">Gambar</label>
                    <input type="file" className="form-control" id="gambar"
                        onChange={(e) => setGambar(e.target.files)} multiple />
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary btn-lg">Save</button>
                    <Link to={'/product'} className='btn btn-danger btn-lg'>Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default AddProduct;