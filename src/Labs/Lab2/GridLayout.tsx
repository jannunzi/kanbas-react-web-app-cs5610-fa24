export default function GridLayout() {
  return (
    <div id="wd-css-grid-layout">
      <div id="wd-css-left-right-layout">
        <h2>Grid layout</h2>
        <div className="wd-grid-row">
          <div
            className="wd-grid-col-half-page
                      wd-bg-color-yellow"
          >
            <h3>Left half</h3>
          </div>
          <div
            className="wd-grid-col-half-page
           wd-bg-color-blue wd-fg-color-white"
          >
            <h3>Right half</h3>
          </div>
        </div>
      </div>
      <div className="wd-grid-row">
        <div
          className="wd-grid-col-third-page
         wd-bg-color-green wd-fg-color-white"
        >
          <h3>Left third</h3>
        </div>
        <div
          className="wd-grid-col-two-thirds-page
         wd-bg-color-red wd-fg-color-white"
        >
          <h3>Right two thirds</h3>
        </div>
      </div>
      <div className="wd-grid-row">
        <div className="wd-grid-col-left-sidebar wd-bg-color-yellow">
          <h3>Side bar</h3>
          <p>This is the left sidebar</p>
        </div>
        <div
          className="wd-grid-col-main-content
         wd-bg-color-blue wd-fg-color-white"
        >
          <h3>Main content</h3>
          <p>
            {" "}
            This is the main content. This is the main content. This is the main
            content.{" "}
          </p>
        </div>
        <div
          className="wd-grid-col-right-sidebar
         wd-bg-color-green wd-fg-color-white"
        >
          <h3>Side bar</h3>
          <p>This is the right sidebar</p>
        </div>
      </div>
    </div>
  );
}
