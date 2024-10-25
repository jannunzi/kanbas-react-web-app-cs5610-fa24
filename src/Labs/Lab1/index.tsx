import { useSelector } from "react-redux";

export default function Lab1() {
  const { message } = useSelector((state: any) => state.helloReducer);
  const { sum } = useSelector((state: any) => state.addReducer);
  const { count } = useSelector((state: any) => state.counterReducer);

  return (
    <div id="wd-lab1">
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      {message}
      <div id="wd-h-tag">
        <h2>SUM: {sum}</h2>
        <h2>COUNT: {count}</h2>
        <h4>Heading Tags</h4>
        Text documents are often broken up into several sections and
        subsections. Each section is usually prefaced with a short title or
        heading that attempts to summarize the topic of the section it precedes.
        For instance this paragraph is preceded by the heading Heading Tags. The
        font of the section headings are usually larger and bolder than their
        subsection headings. This document uses headings to introduce topics
        such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags
        can be used to format plain text so that it renders in a browser as
        large headings. There are 6 heading tags for different sizes: h1, h2,
        h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest
        heading.
        <h4>Paragraphs</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
        </div>
        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead>
              <tr>
                <th>Quiz</th> {/* table heading*/}
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q2</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q3</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q4</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q1</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
              <tr>
                <td>Q1</td> {/* table data / cell */}
                <td>HTML</td>
                <td>2/3/21</td>
                <td>85</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}>Average</td> {/* column span */}
                <td>90</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div id="wd-images">
        <h4>Image tag</h4>
        Loading an image from the internet:
        <br />
        <img
          id="wd-starship"
          width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
        />
        <br />
        Loading a local image:
        <br />
        <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
      </div>

      <div id="wd-forms">
        <h4>Form Elements</h4>
        {/* <form id="wd-text-fields"> */}
        <h5>Text Fields</h5>
        <label htmlFor="wd-text-fields-username">Username:</label>
        <input id="wd-text-fields-username" type="text" placeholder="jdoe" />
        <br />
        <label htmlFor="wd-text-fields-password">Password:</label>
        <input type="password" id="wd-text-fields-password" value="123@#$asd" />
        <br />
        <label htmlFor="wd-text-fields-first-name">First name:</label>
        <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
        <label htmlFor="wd-text-fields-last-name">Last name:</label>
        <input
          type="text"
          id="wd-text-fields-last-name"
          placeholder="Doe"
          value="Wonderland"
          title="The last name"
        />
        <h5>Text boxes</h5>
        <label>Biography:</label>
        <br />
        <textarea id="wd-textarea" cols={30} rows={15}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </textarea>
        <h5 id="wd-buttons">Buttons</h5>
        <button id="wd-all-good" onClick={() => alert("Life is Good!")}>
          Hello World!
        </button>
        <h5 id="wd-radio-buttons">Radio buttons</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-comedy" />
        <label htmlFor="wd-radio-comedy">Comedy</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-drama" />
        <label htmlFor="wd-radio-drama">Drama</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-scifi" />
        <label htmlFor="wd-radio-scifi">Science Fiction</label>
        <br />
        <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
        <label htmlFor="wd-radio-fantasy">Fantasy</label>
        <br />
        <label>
          <input type="radio" name="radio-genre" />
          Horror
        </label>
        <h5 id="wd-checkboxes">Checkboxes</h5>
        <label>Favorite movie genre:</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
        <label htmlFor="wd-chkbox-comedy">Comedy</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
        <label htmlFor="wd-chkbox-drama">Drama</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
        <label htmlFor="wd-chkbox-scifi">Science Fiction</label>
        <br />
        <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
        <label htmlFor="wd-chkbox-fantasy">Fantasy</label>
        {/* </form> */}
        <h4 id="wd-dropdowns">Dropdowns</h4>
        <h5>Select one</h5>
        <label htmlFor="wd-select-one-genre">Favorite movie genre: </label>
        <br />
        <select id="wd-select-one-genre">
          <option value="COMEDY">Comedy (makes you laugh)</option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <h5>Select many</h5>
        <label htmlFor="wd-select-many-genre">
          Favorite all movie genres:{" "}
        </label>
        <br />
        <select id="wd-select-many-genre" multiple>
          <option selected value="COMEDY">
            Comedy
          </option>
          <option value="DRAMA">Drama</option>
          <option selected value="SCIFI">
            Science Fiction
          </option>
          <option value="FANTASY">Fantasy</option>
        </select>
        <h4>Other HTML field types</h4>
        <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
        <input
          type="number"
          id="wd-text-fields-salary-start"
          placeholder="1000"
          defaultValue="10001"
          min="10000"
          max="10005"
        />
        <br />
        <label htmlFor="wd-text-fields-rating">Rating: </label>
        <input
          type="range"
          id="wd-text-fields-rating"
          placeholder="Doe"
          max="5"
          defaultValue="4"
        />
        <br />
        <label htmlFor="wd-text-fields-email">Email: </label>
        <input
          type="email"
          placeholder="jdoe@somewhere.com"
          id="wd-text-fields-email"
        />
        <br />
        <label htmlFor="wd-text-fields-dob">Date of birth: </label>
        <input type="date" id="wd-text-fields-dob" defaultValue="2000-01-21" />
        <br />
      </div>
    </div>
  );
}
