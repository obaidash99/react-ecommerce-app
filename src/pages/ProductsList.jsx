import styled from 'styled-components';
import Navbar from '../components/Navbar';
import { Announcement } from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Filter from '../components/Filter';

const Container = styled.div``;
const Title = styled.h1`
	margin: 20px;
`;

const ProductsList = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Title>All You Want</Title>
			<Filter />
			<Products />
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default ProductsList;
