import { useContext } from "react";
import { Header } from "../../components/Header/header.component";
import { SearchForm } from "../../components/SearchForm/searchForm.component";
import { Summary } from "../Summary/summary.component";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./transactions.styles";
import { TransactionsContext } from "../../contexts/Transactions.context";
import { dateFormatter, priceFormatter } from "../../utils/formatter";


export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {
              transactions.map(transaction => {
                return (
                  <tr key={transaction.id}>
                    <td width="50%">{transaction.description}</td>
                    <td>
                      <PriceHighlight variant={transaction.type}>
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </PriceHighlight>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
