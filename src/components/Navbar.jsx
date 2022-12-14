import { Search } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Left = styled.div`
	felx: 1;
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
`;

const Center = styled.div`
	felx: 1;
	text-align: center;
`;

const Logo = styled.h1`
	font-weight: bold;
`;

const Right = styled.div`
	felx: 1;
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
					<Logo>LAMA.</Logo>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>SignIn</MenuItem>
					<MenuItem>
						<Badge badgeContent={3} color="secondary">
							<ShoppingCartOutlinedIcon color="action" />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
