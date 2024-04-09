import { ReactNode, createContext, useEffect, useState } from "react";

export interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// const TransactionContext = createContext<TransactionContextType>({
//   transactions: []
// })

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    // fetch('http://localhost:3333/transactions')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //   })
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json();
    setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions: [] }}>
      {children}
    </TransactionsContext.Provider>
  )
}
