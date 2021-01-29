import React from 'react'
import styles from './DeleteButton.module.css'



const DeleteButton: React.FC = (props: any) => {
 
  return (
    <button className={styles.destroy} onClick={props.onDelete} />
  )
}




export default DeleteButton