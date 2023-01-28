import { Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 30px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: felx;
	align-items: center;
`;

const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	text-transform: uppercase;
`;
const SearchContainer = styled.div`
	border: 1px solid lightgray;
	display: flex;
	align-items: center;
	margin-left: 25px;
	padding: 5px;
	border-radius: 5px;
`;

const Input = styled.input`
	border: none;
	outline: none;
`;

const Center = styled.div`
	flex: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
	transition: all 0.3s ease;

	&:hover {
		color: teal;
	}
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 20px;
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>en</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: 16 }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/">
						<Logo>LAMA.</Logo>
					</Link>
				</Center>
				<Right>
					<MenuItem className="nav-item">
						<Link className="nav-btn" to="/register">
							Register
						</Link>
					</MenuItem>
					<MenuItem className="nav-item">
						<Link className="nav-btn" to="/login">
							Log In
						</Link>
					</MenuItem>
					<MenuItem className="nav-item">
						<Link to="/cart">
							<Badge badgeContent={3} color="secondary">
								<ShoppingCartOutlinedIcon color="action" />
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
