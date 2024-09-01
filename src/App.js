import { useState } from "react"
import AllTasks from "./components/AllTasks"

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: "Vynest kos" },
    { id: 2, name: "Uklidit kuchyn" },
    { id: 3, name: "Zajit do Lidlu" },
    { id: 4, name: "Nakoupit" },
    { id: 5, name: "Nakrmit kocku" },
  ])

  // const vymazaneId = 3

  // // Funkce filter projde každý úkol a VRÁTÍ jen ty, jejichž ID se NErovná 3.
  // const vyslednePole = data.filter((jedenUkol) => {
  //   return jedenUkol.id !== vymazaneId
  // })

  // console.log(vyslednePole)

  // --------- BODY -----------

  return (
    <div className="all-tasks">
      <AllTasks />
    </div>
  )
}

export default App
