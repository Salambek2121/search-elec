import { fakeDatabase } from './fakeDatabase'
import Card from './Card'
import { useState } from 'react'
import styles from './css/App.module.css'

function App() {
  const[data, setData]=useState(fakeDatabase.challenges)
  const [text,setText] = useState('')
  const searchProd = (e) => {
    setText(e.target.value)
  }
  
  return (
    <>
    <div className={styles.input}>
      <input type="text"
      value={text}
      onChange={(e) => searchProd(e)} />
    </div>
    <div className={styles.wrap}>
      <div className={styles.filter}>
        {data.filter((item) => {
          if(item.title.includes(text)){
            return item
          }
        })
.map((item)=>{
return(
  <Card  image={item.Image} title={item.title} price={item.price}/>
)
})}
      
      </div>
    </div>
    </>
  )
}

export default App