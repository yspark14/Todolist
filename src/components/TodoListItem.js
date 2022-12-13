import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import styled from "styled-components";
import cn from "classnames";

const StyledTodoListItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  checkbox {
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: 10px;
    //아이콘
    svg {
      font-size: 26px;
    }
    text {
      margin-left: 20px;
      flex: 1;
    }
    //checked되었을 때의 스타일
    &.checked {
      svg {
        color: #356859;
      }
      text {
        color: #356859;
        text-decoration: line-through;
      }
    }
  }

  // 삭제기능 - 휴지통모양
  remove {
    display: flex;
    align-items: center;
    font-size: 25px;
    color: #356859;
    cursor: pointer;
    margin-top: 4px;
    padding-right: 17px;
    //마우스 올리면 색깔 바뀌게
    &:hover {
      color: #ff8787;
    }
  }
`;

//Todolist에서 넘겨받은 todo값
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <StyledTodoListItem>
      <checkbox
        //checked=true일 때 checked라는 class를 추가
        //checked는 true 혹은 false값을 갖도록 묶어준것이고 하나의 조건으로 조건부 스타일링 해준 것
        className={cn("Checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 뜸 */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <text>{text}</text>
      </checkbox>

      <remove onClick={() => onRemove(id)}>
        <BiTrash />
      </remove>
    </StyledTodoListItem>
  );
};
export default TodoListItem;
