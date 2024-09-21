import Dimensions from "./Dimensions";
import "./index.css";
import Positions from "./Positions";
import Zindex from "./Zindex";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam</p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>
      <h2>Colors</h2>
      <h3 className="fg-color-blue">Foreground color</h3>
      <p className="fg-color-red">
        The text in this paragraph is red but
        <span className="fg-color-green">this text is green</span>
        The text in this paragraph is red but
      </p>
      <h3 className="bg-color-blue fg-color-white">Background color</h3>
      <p className="bg-color-red fg-color-black">
        This background of this paragraph is red but
        <span className="bg-color-green fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <h1
        style={{
          backgroundColor: "yellow",
        }}
      >
        Block vs inline elements
      </h1>
      <p
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          marginTop: "50px",
        }}
      >
        Headings and paragraphs are block elements
      </p>
      Normal text renders inline
      <br />
      <br />
      <span
        style={{
          backgroundColor: "red",
          color: "white",
          borderStyle: "solid",
          borderTopWidth: "10px",
          borderBottomWidth: "20px",
          borderLeftWidth: "5px",
          borderRightWidth: "15px",
          borderLeftColor: "green",
          borderRightColor: "blue",
          borderTopColor: "red",
          borderBottomColor: "yellow",
        }}
      >
        Span elements
      </span>
      <span
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        render inline
      </span>
      with the rest of the content
      <p className="border-fat border-red border-solid">Solid fat red border</p>
      <p className="border-thin border-blue border-dashed">
        Dashed thin blue border
      </p>
      <h3>Rounded corners</h3>
      <p
        className="rounded-corners-top border-thin
border-blue border-solid padding-fat"
      >
        Rounded corners on the top
      </p>
      <Dimensions />
      <Positions />
      <Zindex />
    </div>
  );
}
