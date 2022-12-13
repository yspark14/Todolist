import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const StyledTodoList = styled.div`
  min-height: 450px;
  max-height: 500px;
  /* over-flow-y: auto; */
`;

// props로 todos를 받아 map을 이용하여 TodoListItem으로 이루어진 배열로 변환하여 렌더링
// map을 사용해 컴포넌트 변환 시, 반드시 key props를 전달해줘야 함 -> todo의 id값을 key값으로 설정
const TodoList = ({
  todos,
  onRemove,
  onToggle,
  onInsertToggle,
  setSelectedTodo,
}) => {
  return (
    <StyledTodoList>
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          onInsertToggle={onInsertToggle}
          setSelectedTodo={setSelectedTodo}
        />
      ))}
    </StyledTodoList>
  );
};

export default TodoList;
