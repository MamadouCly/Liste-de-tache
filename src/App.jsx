import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Header />
          <Body />
        </div>
      </div>
    </div>
  );
}
