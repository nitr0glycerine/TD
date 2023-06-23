import React, { Component } from "react";
import HeaderTask from "../HeaderTask";
import SearcjForm from "../Search";
import ItemStatusfilter from "../item-status-filter";
import TaskList from "../TaskList";
import ItemAddForm from "../item-add-form";
import "./app.css";

export default class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem("Drink cofe"),
      this.createTodoItem("Drink colla"),
      this.createTodoItem("Drink tea"),
      this.createTodoItem("Drink pepsi"),
    ],
    term: "", // здесь хранится текст для поиска
    filter: "all",
  };

  createTodoItem(label) {
    // шаблон для создания задачи/объекта
    return {
      label: label,
      status: false,
      done: false,
      id: this.maxId++,
    };
  }

  deleteItem = (id) => {
    // функция удаления
    this.setState(({ todoData }) => {
      // метод, для изменения состояния
      const idx = todoData.findIndex((el) => el.id === id); // findIndex - метод для поиска индекта, здесь он сравнивает индекс с ключом

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return {
        todoData: newArray, // новый
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];
      return {
        todoData: newArr,
      };
    });
  };

  toggleProperty = (arr, id, propName) => {
    //фукнция для редактирования массива
    const idx = arr.findIndex((el) => el.id === id); // поиск индекса через метод фильтер
    const oldItem = arr[idx]; // константа присваивает конкретное значение массива со всеми его свойствами
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleStatus = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "status"),
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done"),
      };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  search(items, term) {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      //фильтрация элементов перед их отрисовкой
      return item.label.indexOf(term) > -1;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    const visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter((el) => el.done).length; // эту строку нужно изучить
    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <HeaderTask todo={todoCount} done={doneCount}></HeaderTask>,
        <div className="header-search-container">
          <SearcjForm onSearchChange={this.onSearchChange}></SearcjForm>,
          <ItemStatusfilter
            filter={filter}
            onFilterChange={this.onFilterChange}
          ></ItemStatusfilter>
        </div>
        <TaskList
          todos={visibleItems}
          onDelete={this.deleteItem}
          onToggleStatus={this.onToggleStatus}
          onToggleDone={this.onToggleDone}
        ></TaskList>
        <ItemAddForm onItemAdded={this.addItem}></ItemAddForm>
      </div>
    );
  }
}
