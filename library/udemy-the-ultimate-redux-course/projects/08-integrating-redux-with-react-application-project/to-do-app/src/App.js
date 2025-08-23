import Tasks from "./components/Tasks";
import StoreContext from "./context/storeContext";
import store from "./store/configureStore";

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <div>
        <Tasks />
      </div>
    </StoreContext.Provider>
  );
};

export default App;
