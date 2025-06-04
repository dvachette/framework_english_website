import "./App.css";
import Button from "./elements/button";

function App() {
    return (
      <div className="app">
        <main>
          <div id="header-pane">
            <h1>Welcome to a world of ethic computers</h1>
          </div>
          <br />
          <br />
          <br />

          <div id="content-pane">
            <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
            Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
            <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            <p id="elem2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
            Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
            <p id="elem3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
            Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
          </div>
        </main>
        <aside className="sidebar">
          <Button id="bt-1" label="Click Me" onclick={() => scrollToElement("header-pane")} iconPath="https://img.icons8.com/fluency-systems-filled/500/FFFFFF/home.png " />
          <Button id="bt-2" label="Click Me" onclick={() => scrollToElement("elem2")} iconPath="/src/assets/home.png" />
          <Button id="bt-3" label="Click Me" onclick={() => scrollToElement("elem3")} iconPath="/src/assets/home.png" />
        </aside>
      </div>
  );
}

function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: "smooth" });
    }
}



export default App;
