import "./App.css";
import Button from "./elements/button";

function App() {
	const color = "FFFFE1";

    return (
      <div className="app">
        <main>
          <div id="header-pane">
            <h1>Welcome to a world of ethic computers</h1>
          </div>

          <div id="content-pane">
            <div id="social" className="item">
              <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
              Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
              <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            </div>
            <div id="support" className="item">
              <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
              Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
              <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            </div>
            <div id="action" className="item">
              <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
              Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
              <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            </div>
            <div id="signal" className="item">
              <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
              Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
              <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            </div>
            <div id="stories" className="item">
              <p id="elem1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias magni fuga labore quisquam vitae ea porro alias placeat. Cupiditate quisquam in suscipit sunt, ad voluptatem nulla sequi eos similique voluptatum.
              Et at quae iure praesentium dicta consequuntur sint commodi fuga tenetur exercitationem laborum veniam vel asperiores non alias deserunt porro quibusdam facilis ex, quo accusantium expedita vero eum! Molestias, fugiat!</p>
              <img className="img-round" src="src/assets/Press-Assets-img02-3641916910.jpg" alt="IUT Image" />
            </div>
          </div>
        </main>
        <aside className="sidebar">
				<Button id="bt-1" label="Home" onclick={() => scrollToElement("header-pane")} iconPath={"https://img.icons8.com/fluency-systems-filled/500/" + color + "/home.png "} />
          <Button id="bt-2" label="Social" onclick={() => scrollToElement("social")} iconPath={"https://img.icons8.com/material-rounded/500/" + color + "/user-group-man-man.png"} />
          <Button id="bt-3" label="Support" onclick={() => scrollToElement("support")} iconPath={"https://img.icons8.com/sf-ultralight-filled/500/" + color + "/flex-biceps.png"} />
          <Button id="bt-3" label="Action" onclick={() => scrollToElement("action")} iconPath={"https://img.icons8.com/material-rounded/500/" + color + "/lightning-bolt--v1.png"} />
          <Button id="bt-3" label="Signal" onclick={() => scrollToElement("signal")} iconPath={"https://img.icons8.com/ios-glyphs/500/" + color + "/commercial.png"} />
          <Button id="bt-3" label="Stories" onclick={() => scrollToElement("stories")} iconPath={"https://img.icons8.com/ios-glyphs/500/" + color + "/book.png"} />
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
