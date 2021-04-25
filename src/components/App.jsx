import React from "react";
import ProductList from "./ProductList";

class App extends React.Component {
  render() {
    return (
      <main className='app__products'>
        <ProductList />
      </main>
    );
  }
}

export default App;
