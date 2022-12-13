import { VscAdd } from "react-icons/vsc"; //react icons에서 원하는 아이콘의 이름을 중괄호에 넣어 불러와 사용.
import styled from "styled-components";
import { useCallback, useState } from "react";

// form태그
const TodoForm = styled.form`
  display: flex;
  background: #d9e9d6;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 17px;
  border-radius: 8px;

  // input - 목록추가 입력창
  input {
    background: none;
    outline: none;
    border: none;
    padding: 14px;
    font-size: 18px;
    line-height: 1.5;
    color: #356859;
    &::placeholder {
      color: #9f9f9f;
    }
    flex: 1;
  }
  button {
    background: none;
    outline: none;
    border: none;
    background: rgb(189, 212, 190);
    background: linear-gradient(
      90deg,
      rgba(189, 212, 190, 1) 0%,
      rgba(217, 233, 214, 1) 79%,
      rgba(255, 252, 245, 1) 100%
    );
    color: white;
    border-radius: 10px;
    font-size: 28px;
    display: flex;
    margin: 8px;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: rgb(208, 208, 208);
      background: linear-gradient(
        90deg,
        rgba(208, 208, 208, 1) 0%,
        rgba(217, 217, 217, 1) 52%,
        rgba(255, 252, 245, 1) 100%
      );
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-4px);
    }
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState(""); //입력 받을 내용 state
  //onChange 이벤트 발생 시 value값을 set해주기 위해서
  //처음 렌더링될 때만 함수를 생성하고 재사용할 수 있도록 useCallback Hook을 이용해 setValue 해준다.
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");
      e.preventDefault(); //submit 이벤트는 브라우저에서 새로고침을 발생시킴. 이를 방지하는 코드.
    },
    [onInsert, value]
  );

  return (
    <TodoForm onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요!"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <VscAdd />
      </button>
    </TodoForm>
  );
};
export default TodoInsert;
