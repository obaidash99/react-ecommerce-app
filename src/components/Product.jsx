import styled from 'styled-components';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease;
	cursor: pointer;
`;
const Container = styled.div`
	display: flex;
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	align-items: center;
	justify-content: center;
	background-color: #f5fbfb;
	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
`;
const Cirlce = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height: 75%;
	max-width: 90%;
	z-index: 2;
`;
const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.3s ease;

	&:hover {
		background-color: #e9f5f5;
		transform: scale(1.1);
	}
`;

const Product = ({ item }) => {
	return (
		<Container>
			<Cirlce />
			<Image src={item.image} />
			<Info>
				<Icon>
					<ShoppingCartOutlinedIcon />
				</Icon>
				<Icon>
					<SearchOutlinedIcon />
				</Icon>
				<Icon>
					<FavoriteBorderOutlinedIcon />
				</Icon>
			</Info>
		</Container>
	);
};

export default Product;
