import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/35550/ipad-tablet-technology-touch.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	/* text-align: center; */
	padding: 20px;
	width: 25%;
	background-color: #fff;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-direction: column;
`;
const Input = styled.input`
	flex: 1;
	min-width: 90%;
	margin: 10px 0px;
	padding: 10px;

	border: 1px solid gray;
	outline: none;
`;

const Button = styled.button`
	width: 40%;
	margin: 10px 0px;
	padding: 15px 20px;

	border: none;
	background-color: teal;
	color: white;
	letter-spacing: 1px;
	text-transform: uppercase;
`;
const Link = styled.a`
	margin: 3px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
	color: #1d5490;
	transition: all 0.3s ease;

	&:hover {
		color: #267cd9;
	}
`;

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Log in</Title>
				<Form>
					<Input placeholder="Username"></Input>
					<Input placeholder="Password"></Input>
					<Button>Log in</Button>
					<Link>Forgot Password?</Link>
					<Link>Create new account</Link>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;
