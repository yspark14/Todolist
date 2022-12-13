import styled from "styled-components";

const StyledTodoTemplate = styled.div`
  width: 460px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 70px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  /* overflow는 컨텐츠의 내용이 설정한 크기보다 너무 클 때 이를 어떻게 보여줄지를 결정 */
`;

// Todolist 타이틀 부분
const AppTitle = styled.div`
  background: #fffbf0;
  color: black;
  height: 150px;
  font-size: 40px;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -7px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`;

// 전체 목록 글적히는 부분
const Content = styled.div`
  background: #fffbf0;
`;

const TodoTemplate = ({ children }) => {
  return (
    <StyledTodoTemplate>
      <AppTitle> ✔️ Todo List </AppTitle>
      <Content>{children}</Content>
    </StyledTodoTemplate>
  );
};

export default TodoTemplate;
