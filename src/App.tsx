import type { Component } from 'solid-js';
import Header from './infrastructure/ui/header/CustomHeader';
import CreateTask from './infrastructure/ui/CreateTask';

const App: Component = () => {
  return (
    <div>
      <Header />
      <CreateTask />
    </div >
  );
};

export default App;
