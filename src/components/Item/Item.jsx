import React from "react";
import ItemCount from "../ItemListContainer/ItemCount";

function Item({prod}) {
	return (
		<div key={prod.id} className='col-md-4'>
            <div className="card w-75 mt-5">
                <img src={prod.img} className="card-img-top" alt="..."/>
                <div className="card-body text-center">
                    <h5 className="card-title">{prod.name}</h5>
                    <p className="card-text">{prod.category}</p>
                    <p className="card-text">${prod.price}</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">Ver Más</a>
                    <ItemCount inicial={1} max={10} />
                </div>
            </div>
		</div>
	);
}

export default Item;
