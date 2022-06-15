import React from "react";

const Modal=({show, item, onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail = item.gambar;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fa-solid fa-circle-xmark"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{item.nama}</h1>
                            <h3>Rp {item.harga}</h3>
                            <h3>{item.stok}</h3>
                            <h4>{item.ukuran}</h4><br />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal;