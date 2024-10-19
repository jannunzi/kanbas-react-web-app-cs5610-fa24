export default function TernaryOperator() {
  let loggedIn = false;
  let true1 = true;
  return (
    <div id="wd-ternary-operator">
      <h4>Logged In</h4>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
      <h4>If Else</h4>
      {true1 && <p>true1</p>}
    </div>
  );
}
