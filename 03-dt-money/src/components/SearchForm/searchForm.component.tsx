import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './searchForm.styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../contexts/Transactions.context'
import { memo } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

/**
 * Why a component re-renders?
 *
 * - Hooks changed
 * - Props changed
 * - Parent re-rendered
 *
 * What is the rendering pipeline?
 *
 * 1. React recreates the HTML of that component
 * 2. Compare the recreated HTML version with the previous one
 * 3. If something changed, rewrites the HTML on-screen
 *
 * Memo:
 * 0. Hooks changed, Props changed (deep comparison)
 * 0.1 Compares if the previous version of Props and Hooks changed
 * 0.2 If something changed, it'll allow a re-render
 * */

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    // await new Promise((resolve) => setTimeout(resolve, 2000))

    await fetchTransactions(data.query)

    // console.log(data)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
