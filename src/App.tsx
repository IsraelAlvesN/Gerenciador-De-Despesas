import * as C from './App.styles'
import {Category} from './types/Category'
import {Item} from './types/Item'
import {categories} from './data/categories'
import {items} from './data/items'
import { useEffect, useState } from 'react'

import {filterListByMonth, getCurrentMonth} from './helpers/dateFilter'

const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  //pegar mês atual
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Area de informações */}

        {/* Area de inserir informações */}

        {/* Tabela de itens */}
      </C.Body>
    </C.Container> 
  )
}

export default App;