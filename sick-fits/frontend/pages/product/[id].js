/* eslint-disable react/prop-types */
import SingleProduct from '../../components/SingleProduct';

export default function SingleProductPage({ query }) {
  console.log('query: ', query);
  return <SingleProduct id={query.id} />;
}
