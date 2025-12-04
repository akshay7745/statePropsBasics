import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
export default function Examples() {
  const [dynamicContent, setDynamicContent] = useState("");

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
    <Section title={"Examples"} id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}
