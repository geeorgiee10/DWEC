

export function List({items}) {
    

  const listAnimals = items.map(item =>
    <li key={item}>
      {item}
    </li>
  )

    return (
      <>
        
        {listAnimals}
        
      </>
    )
  }

  