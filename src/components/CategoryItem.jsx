import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div``;
const Image = styled.img``;
const Info = styled.div``;
const Title = styled.h2``;
const Button = styled.button``;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>Shop Now</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
