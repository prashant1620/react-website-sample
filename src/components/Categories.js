import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const Header = styled.h2`
margin: 15px 30px;
`
const Title = styled.h1`
  margin: 20px;
`;

const Categories = () => {
  return (
    <div>
       <Title>All Categories</Title>
       <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
    </div>
    
  );
};

export default Categories;
