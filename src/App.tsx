import { Widget } from "./components/Widget"

interface ButtonProps {
  text?: string
}
function Button(props: ButtonProps) {
  return <button className="bg-violet-300 px-2">{props.text ?? 'Default'}</button>
}
function App() {

  return (
    <>
      <Widget />
    </>
  )
}

export default App
