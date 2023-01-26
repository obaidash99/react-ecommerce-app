import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
		url('https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	text-align: center;
	padding: 20px;
	width: 40%;
	background-color: #fff;
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;

	border: 1px solid gray;
	outline: none;
`;
const Agreement = styled.span`
	font-size: 15px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 40%;
	margin: auto;
	padding: 15px 20px;

	border: none;
	background-color: teal;
	color: white;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>Create Account</Title>
				<Form>
					<Input placeholder="First Name"></Input>
					<Input placeholder="Last Name"></Input>
					<Input placeholder="Email"></Input>
					<Input placeholder="username"></Input>
					<Input placeholder="Password"></Input>
					<Input placeholder="Confirm password"></Input>
					<Agreement>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo velit
						expedita ex numquam incidunt iste nobis quis deserunt minima qui.
					</Agreement>
					<Button>Create</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
