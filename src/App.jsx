import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";
function App() {
  const [dynamicContent, setDynamicContent] = useState("");
  // const { title, description, code } = EXAMPLES[dynamicContent];
  const listItems = CORE_CONCEPTS?.map((data, ind) => (
    <CoreConcept key={ind} {...data} />
  ));
  function handleClick(text) {
    setDynamicContent(text);
  }

  //! Conditional rendering using 3rd way dynamically storing jsx value in the variable
  let topicData = <div id="tab-content">Please select a topic</div>;
  if (dynamicContent) {
    topicData = (
      <div id="tab-content">
        <h3>{EXAMPLES[dynamicContent].title}</h3>
        <p>{EXAMPLES[dynamicContent].description}</p>
        <pre>
          <code>{EXAMPLES[dynamicContent].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>{listItems}</ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={dynamicContent === "components"}
              onClick={() => {
                handleClick("components");
              }}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "jsx"}
              onClick={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "props"}
              onClick={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={dynamicContent === "state"}
              onClick={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </menu>
          {/*! first way using ternary operator  */}
          {/* {dynamicContent ? (
            <div id="tab-content">
              <h3>{EXAMPLES[dynamicContent].title}</h3>
              <p>{EXAMPLES[dynamicContent].description}</p>
              <pre>
                <code>{EXAMPLES[dynamicContent].code}</code>
              </pre>
            </div>
          ) : (
            <div id="tab-content">Please select a topic</div>
          )} */}
          {/*! second way using && operator  */}

          {/* {!dynamicContent && <div id="tab-content">Please select a topic</div>}
          {dynamicContent && (
            <div id="tab-content">
              <h3>{EXAMPLES[dynamicContent].title}</h3>
              <p>{EXAMPLES[dynamicContent].description}</p>
              <pre>
                <code>{EXAMPLES[dynamicContent].code}</code>
              </pre>
            </div>
          )} */}
          {topicData}
        </section>
      </main>
    </div>
  );
}

export default App;
