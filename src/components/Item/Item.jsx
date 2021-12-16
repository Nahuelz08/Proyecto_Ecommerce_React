import {Link} from "react-router-dom";
import './Item.css'

function Item({prod}) {
	return (
		<div className='col-md-4'>
            <div className="card mt-5">
                <img src={prod.img} className="card-img-top card-img-products" alt={prod.name}/>
                <div className="card-body text-center">
                    <h4 className="card-title">{prod.name}</h4>
                    <h5 className="card-text">${prod.price}</h5>
                </div>
                <div className="card-footer text-center">
                    <Link to={`/detalle/${prod.id}`}>
                        <button className="btn btn-danger bg-gradient">Ver Más</button>
                    </Link>
                </div>
            </div>
		</div>
	);
}

export default Item;
