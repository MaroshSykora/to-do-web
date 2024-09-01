import "./AllTasks.css"
import data from "../data"
import { useState } from "react"

// FUNKCE FILTER NEMAZE ALE ZOBRAZI VSECHNY TY OSTATNI OBJEKTY JEJICHZ ID NENI VYBRANE

const AllTasks = () => {
  // useState refreshuje danou cast stranky v tomto pripade (data) - je to takovy update 
  const [myTask, setMyTask] = useState(data)

  const tasksHandler = (idecko) => {
    // 2️⃣ filter po radcich (jak v Loopu) projde vsemi objekty a zjisti id objektu a ...
    const filteredTasks = myTask.filter((oneTask) => {
      // 3️⃣ ...zaroven filter rekne vrat objekt ktereho id se nerovna danemu id pro filtr
      return oneTask.id !== idecko
    })
    // 4️⃣ takze se zobrazi vsechny objekty ktere nemaji tlacitkem (Vymazat) vybrane id
    setMyTask(filteredTasks)
  }

  // allDeleteHandler nemaze vsechno, ale misto puvodnich objektu vrati prazdny objekt
  const allDeleteHandler = () => {
    setMyTask([])
  }

  return (
    <div>
      {myTask.map((oneTask) => {
        const { id, name } = oneTask

        return (
          <div className="one-task" key={id}>
            <h4>{name}</h4>
            {/* 1️⃣ udalosti onClick se vypichne id daneho objektu */}
            <button type="button" onClick={() => tasksHandler(id)}>
              Vymazat
            </button>
          </div>
        )
      })}
      <button type="button" className="main-button" onClick={allDeleteHandler}>
        Vse vymazat
      </button>
    </div>
  )
}
export default AllTasks
