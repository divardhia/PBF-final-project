import React, { useState, useEffect } from "react";
import Card from "../component/Card";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";
import { onValue, ref, remove } from "firebase/database";

const ProductPage = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    onValue(ref(db, "/product/"), snapshot => {
      const state = snapshot.val();
      if (state !== null) {
        const arr = Object.values(state);
        setProductData(arr);
      } else {
        setProductData([]);
      }
      console.log(productData);
    });
  }

  const deleteProduct = (id) => {
    var yakin = window.confirm("Apakah kamu yakin menghapus buku ini?");

    if (yakin) {
      remove(ref(db, `/product/${id}`));
      getProduct();
    } else {
      window.alert("Baiklah :)");
    }
  }

  return (
    <>
      {console.log(productData)}
      
      <div className="container">
      <Link to="/add/product" className='btn btn-dark btn-lg'>Add New</Link>
        {
          <Card product={productData} hapus={deleteProduct} />
        }
      </div>
    </>
  )
}

export default ProductPage;