import styled from 'styled-components';
import { categories } from '../data';

const Container = styled.div`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
`;
const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h2`
	color: #fffff5;
	margin-bottom: 20px;
	text-transform: uppercase;
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	text-transform: uppercase;
	letter-spacing: 1px;
	border-radius: 5px;
	cursor: pointer;
	background-color: #fff;
	color: gray;
	font-weight: bold;
`;

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
