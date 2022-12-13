import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";
import { useState, useRef } from "react";

const App = () => {
  // useState를 이용해 todos 상태를 정의
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "강의 듣기",
      checked: false,
    },
    {
      id: 2,
      text: "Todo List 작성하기",
      checked: true,
    },
    {
      id: 3,
      text: "블로그 작성하기",
      checked: true,
    },
  ]);

  const nextId = useRef(4); //nextId의 초기값 4 -> id 3개까지 적었으니까

  //삽입
  const onInsert = (text) => {
    const todo = {
      //todo라는 지역 변수 선언하여 추가할 항목 객체 만들기.
      id: nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(todo)); //항목 추가
    nextId.current += 1;
  };

  //제거
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); //파라미터로 받은 id와 일치하지 않는 애들만 filter함수로 남기기.
  };

  //업데이트 - 체크박스
  //onToggle함수는 파라미터로 받은 id의 checked값을 현재 불린 값과 반대의 값으로 바꿔주는 역할
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList
        todos={todos} //todos와 onRemove를 TodoList에 props로 전달
        onRemove={onRemove}
        onToggle={onToggle}
      />
      <TodoFooter />
    </TodoTemplate>
  );
};

export default App;
