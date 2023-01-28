import styled from 'styled-components';
import Products from '../components/Products';
import Filter from '../components/Filter';

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
	text-align: center;
`;

const CategoryProducts = () => {
	return (
		<Container>
			<Title>All You Want</Title>
			<Filter />
			<Products />
		</Container>
	);
};

export default CategoryProducts;
