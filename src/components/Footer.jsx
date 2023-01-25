import { Facebook, GitHub, Instagram, Twitter } from '@mui/icons-material';
import styled from 'styled-components';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Container = styled.div`
	display: flex;
`;
const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
	margin: 20px 0px;
`;
const SocialContainer = styled.div`
	display: flex;
`;
const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;
const Center = styled.div`
	flex: 1;
	padding: 20px;
`;
const Title = styled.h3`
	margin-bottom: 30px;
`;
const List = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;
const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

const Right = styled.div`
	flex: 1;
	padding: 20px;
`;
const ContactItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	gap: 15px;
`;

const Payment = styled.img``;

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>LAMA.</Logo>
				<Desc>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti velit fugiat
					eos perferendis enim maxime esse. Est, odio natus? Quibusdam similique in fuga
					sunt suscipit possimus consequatur aspernatur nam iste.
				</Desc>
				<SocialContainer>
					<SocialIcon color="3b5999">
						<Facebook />
					</SocialIcon>
					<SocialIcon color="e4405f">
						<Instagram />
					</SocialIcon>
					<SocialIcon color="55acee">
						<Twitter />
					</SocialIcon>
					<SocialIcon color="24292e">
						<GitHub />
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Fashion</ListItem>
					<ListItem>Jewelery</ListItem>
					<ListItem>Electronics</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Oredr Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<LocationOnIcon />
					14th of May Bridge - Smouha - Alexandria
				</ContactItem>
				<ContactItem>
					<PhoneIcon />
					+201099506547
				</ContactItem>
				<ContactItem>
					<EmailIcon />
					obaidashurbaji99@gmail.com
				</ContactItem>
				<Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
			</Right>
		</Container>
	);
};

export default Footer;
