import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import { Announcement } from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div``;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	max-height: 100vh;
`;
const ImageContinaer = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 50px;
`;
const Title = styled.h2`
	font-weight: 200;
`;
const Desc = styled.p`
	margin: 20px 0px;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;
const FilterContainer = styled.div`
	width: 50%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	justify-content: space-between;
`;
const AmountContainer = styled.div`
	display: flex;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border: 1px solid teal;
	border-radius: 10px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;
`;
const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: #fff;
	cursor: pointer;
	text-transform: uppercase;
	transition: all 0.3s ease;
	font-weight: 500;
   letter-spacing: 1px;

	&:hover {
		background-color: teal;
		color: #fff;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImageContinaer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImageContinaer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ducimus libero
						facilis perspiciatis reprehenderit impedit aspernatur similique neque
						laudantium reiciendis blanditiis praesentium magni dolorum voluptatem tempore
						delectus, beatae eum et.
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption size="xs">XS</FilterSizeOption>
								<FilterSizeOption size="s">S</FilterSizeOption>
								<FilterSizeOption size="m">M</FilterSizeOption>
								<FilterSizeOption size="l">L</FilterSizeOption>
								<FilterSizeOption size="sl">SL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>Add to Cart</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
