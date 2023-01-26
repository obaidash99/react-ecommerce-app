import styled from 'styled-components';

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SelectContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
const FilterS = styled.div`
	margin: 20px;
`;

const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
`;

const Select = styled.select`
	margin-right: 20px;
	font-size: 16px;
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	background-color: #fafafa;
	color: #333;
	transition: all 0.3s ease;

	&:focus {
		outline: none;
		box-shadow: 0 0 0 2px teal;
	}
`;
const Option = styled.option`
	font-size: 16px;
	color: #333;
	background-color: #fafafa;
	outline: none;
`;

const Filter = () => {
	return (
		<FilterContainer>
			<FilterS>
				<FilterText>Filter Products:</FilterText>
				<SelectContainer>
					<Select>
						<Option disabled selected>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled selected>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</SelectContainer>
			</FilterS>
			<FilterS>
				<FilterText>Sort Products:</FilterText>
				<SelectContainer>
					<Select>
						<Option selected>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</SelectContainer>
			</FilterS>
		</FilterContainer>
	);
};

export default Filter;
