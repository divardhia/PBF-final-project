import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Card = ({ product, hapus }) => {
    const [show, setShow]=useState(false);
    const [productItem, setItem]=useState();

    console.log(product);
    return (
        <>
            {
                product.map((item) => {
                    let thumbnail = item.gambar;
                    let amount=item.stok;
                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            <>
                                <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                    <img src={thumbnail} alt="" width={200} height={200}/>
                                    <div className="card-body">
                                        <h3 className="title">{item.nama}</h3>
                                        <p className="amount">Jumlah : {amount}</p>
                                        <Link to={`/edit/product/${item.uid}`} className='btn btn-info btn-sm'>Edit</Link>
                                        <button onClick={() => hapus(item.uid)} className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                                <Modal show={show} item={productItem} key={item.uid} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                })
            }
        </>
    )
}

export default Card;