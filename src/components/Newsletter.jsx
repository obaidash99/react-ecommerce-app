import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
	height: 60vh;
	background-color: #fcf5f5;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const Title = styled.h1`
	font-size: 70px;
	mix-blend-mode: 20px;
`;
const Desc = styled.div`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 20px;
`;
const InputContainer = styled.div`
	width: 50%;
	height: 40px;
	background-color: #fff;
	display: flex;
	justify-content: space-between;
	border: 1px solid lightgray;
	border-radius: 5px;
`;
const Input = styled.input`
	border: none;
	flex: 7;
	padding-left: 10px;
	border-radius: 5px 0px 0px 5px;
	outline: none;
	transition: all 0.3s ease;

	&:hover {
		padding-left: 14px;
		font-size: 15px;
	}
`;
const Button = styled.button`
	flex: 1;
	border: none;
	background-color: teal;
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 0px 5px 5px 0px;

	&:hover {
		background-color: #006262;
	}
`;

const Newsletter = () => {
	return (
		<Container>
			<Title>Newsletter</Title>
			<Desc>Get timely updates from your favorite products.</Desc>
			<InputContainer>
				<Input placeholder="Your Email" />
				<Button>
					<SendIcon />
				</Button>
			</InputContainer>
		</Container>
	);
};

export default Newsletter;
