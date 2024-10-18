const hello = () => {
  alert("Hello World!");
};
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};
export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button onClick={hello}> Hello World!</button>
      <button onClick={() => hello()}> Hello World 2!</button>
      <button onClick={() => lifeIs("Good!")}>Life is Good!</button>
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
      >
        Life is Great!
      </button>{" "}
      <hr />{" "}
    </div>
  );
}
