import  styles from "@/app/sub-app/subapp.module.css"
import Newform from "@/components/Todoform"
import Todolist from "@/components/Todolist"
import db from "@/utils/db"


const GetTodos = async ()=>{
    const todos = await db.todo.findMany({})
    return todos
}

const  hey = async()=>{
    const todos = await GetTodos()
    return (
        <>
            <div className={styles.dashboard}>welcome</div>
            <h1 className={styles.arrange}>hey</h1>
            <div><Newform/></div>
            <div><Todolist todos={todos}/></div>

        </>
    )
}

export default hey;