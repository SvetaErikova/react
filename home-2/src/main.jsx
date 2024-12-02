import ReactDOM from 'react-dom/client';
import './Card.css';
import './List.css';
import { products } from './products';
import './main.css';


const reactRoot = ReactDOM.createRoot(document.getElementById('root'));

export const Card = ({ id,title, price, imageUrl,  discount }) =>{

	discount = discount && price - ( price * discount)

	return(
		<div className='card' id={id}>
			<div className='card__image'><img src={imageUrl}/></div>
			<div className='card__price'>

			{ discount && (
				<p className='card__discount'>{discount}</p>
			) }

			<p className='card__value'>{price} ₽</p>
			</div>
			
			<h2 className='card__title'>{title}</h2>
		</div>
	)
}

// TODO: Реализовать компонент ProductList
export const ProductList = ({products}) =>{
	return(
		<div className='container'>
			<ul className="list">
				{products.map((item) => (
					
					<li className="list__item" key={item.id}>
						<Card
							imageUrl ={item.imageUrl}
							title={item.title}
							price={item.price}
							id = {item.id}
							discount ={item.discount}
						/>
					</li>
				))}
			</ul>
		</div>

	)
	
	}


reactRoot.render(<ProductList products={products} />)
