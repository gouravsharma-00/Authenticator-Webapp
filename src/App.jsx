import "./assets/App.css";

export default function App() {

  return (
    <>
      <div id="panel" className="flex">
        <h1>Hello, Friends</h1>
        <button className="btn">LOGIN</button>
      </div>
      <div id="content" className="flex">
        <h1>SIGNUP</h1>
        <form className="flex">
          <input name="username" placeholder="Name"/>
          <input name="email" type="email" placeholder="Email"/>
          <div id="button">
            <button className="btn">Button</button>
            <button className="btn">Button</button>
          </div>
        </form>
      </div>
    </>
  )
}