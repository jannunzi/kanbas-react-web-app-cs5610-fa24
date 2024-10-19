export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div
          className="wd-dimension-landscape wd-bg-color-blue
                    wd-fg-color-white"
        >
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
      </div>
    </div>
  );
}
