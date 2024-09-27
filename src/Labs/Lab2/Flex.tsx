export default function Flex() {
  return (
    <div>
      <h1>Flex</h1>
      <div className="flex-container">
        <div className="flex-box flex-box-1">Box 1</div>
        <div className="flex-box flex-box-2">
          Box 2 Box 2<br />
          Box 2 Box 2
        </div>
        <div className="flex-box flex-box-3">
          Box 3 Box 3 Box 3<br />
          Box 3 Box 3 Box 3<br />
          Box 3 Box 3 Box 3
        </div>
      </div>
      <div id="wd-css-flex">
        <h2>Flex</h2>
        <div className="wd-flex-row-container">
          <div className="wd-bg-color-yellow">Column 1</div>
          <div className="wd-bg-color-blue wd-width-75px">Column 2</div>
          <div className="wd-bg-color-red wd-flex-grow-1">Column 3</div>
        </div>
      </div>
    </div>
  );
}
