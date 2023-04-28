import Container from './components/Container';
import productsList from './products.json';

const Item = ({ item }) => {
  return (
    <li className='item' data-testid='product-item'>
      <img src={item.thumbnail} alt={item.title} />
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>{item.brand}</span>
      <span>{item.price}</span>
    </li>
  )
}

function App() {
  const products = productsList.filter(item => item.category === 'smartphones')
  
  return (
    <Container>
      <ul className='list' data-testid='product-list'>
        {products.map(prod => {
          return (
            <Item item={prod} key={prod.title}/>
          )
        })}
      </ul>
    </Container>
  );
}

export default App;
