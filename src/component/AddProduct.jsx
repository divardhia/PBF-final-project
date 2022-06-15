import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { onValue, ref, set } from "firebase/database";
import { AuthContext } from "..";
import { getStorage } from "firebase/storage";
import {
  ref as refStorage,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { Form } from "react-bootstrap";

const AddProduct = () => {
  const storage = getStorage();
  const [imgUrl, setImgUrl] = useState(null);
  const auth = useContext(AuthContext);
  const [nama, setNama] = useState("");
  const [ukuran, setUkuran] = useState("");
  const [stok, setStok] = useState("");
  const [harga, setHarga] = useState("");
  const [fileGambar, setGambar] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const [category, setCategory] = useState([]);

  const getCategory = () => {
    onValue(ref(db, "/category/"), (snapshot) => {
      const state = snapshot.val();
      if (state !== null) {
        const arr = Object.values(state);
        setCategory(arr);
      } else {
        setCategory([]);
      }
    });
  };

  useEffect(() => {
    getCategory();
  }, []);

  const saveProduct = async (e) => {
    e.preventDefault();

    const data = new FormData();

    for (let i = 0; i < fileGambar.length; i++) {
      data.append("file", fileGambar[i]);
    }

    // await axios
    //   .post("//localhost:8000/upload", data)
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });

    let gambar = `./images/${fileGambar[0]["name"]}`;
    let uid = new Date().getTime().toString();

    const storageRef = refStorage(storage, `files/${fileGambar[0]["name"]}`);
    const uploadTask = uploadBytesResumable(storageRef, fileGambar[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        console.log("progress");
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          try {
            set(ref(db, `/product/${uid}`), {
              uid,
              nama,
              ukuran,
              stok,
              harga,
              category: selectedOption,
              gambar: downloadURL,
            });
            // const mountainsRef = ref(storage, fileGambar[0]['name']);
          } catch (error) {
            console.log(error.message);
          }
        });
      }
    );

    auth.setLoggedIn(true);
    navigate("/product");
  };

  return (
    <div className="container-sm">
      <h2 className="head">Tambah Product</h2>
      <hr />
      <form onSubmit={saveProduct}>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">
            Category
          </label>
          <select
            className="form-control"
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            {category.map((item, index) => {
              return (
                <option value={item.namaCategory} key={item.namaCategory}>
                  {item.namaCategory}
                </option>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="nama" className="form-label">
            Nama
          </label>
          <input
            type="text"
            className="form-control"
            id="nama"
            required
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="ukuran" className="form-label">
            Ukuran
          </label>
          <input
            type="text"
            className="form-control"
            id="ukuran"
            required
            placeholder="Ukuran"
            value={ukuran}
            onChange={(e) => setUkuran(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stok" className="form-label">
            Stok
          </label>
          <input
            type="number"
            className="form-control"
            id="stok"
            required
            placeholder="Stok"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="harga" className="form-label">
            Harga
          </label>
          <input
            type="number"
            className="form-control"
            id="harga"
            required
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gambar" className="form-label">
            Gambar
          </label>
          <input
            type="file"
            className="form-control"
            id="gambar"
            onChange={(e) => setGambar(e.target.files)}
            multiple
          />
        </div>
        <div className="mb-3">
          <button className="btn btn-primary btn-lg">Save</button>
          <Link to={"/product"} className="btn btn-danger btn-lg">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
