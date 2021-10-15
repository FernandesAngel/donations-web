import { createContext, useCallback, useContext, useState } from 'react'
import { api } from '../../services/api'
import { useToast } from '../toast'
import { DonationContextData, DonationData } from './interfaces'

const DonationContext = createContext<DonationContextData>(
  {} as DonationContextData
)

export const DonationProvider: React.FC = ({ children }) => {
  const { addToast } = useToast()

  const [loading, setLoading] = useState(false)

  const donate = useCallback(
    async (donation: DonationData) => {
      try {
        setLoading(true)
        const price = donation.price
          .replace('R$ ', '')
          .replace('.', '')
          .replace(',', '')
        await api.post('donations/create', {
          ...donation,
          price: Number(price)
        })
        setLoading(false)
        addToast('Obrigado pela sua doação!', 'success')
        return true
      } catch (err) {
        addToast('Erro ao realizar doação', 'error')
        setLoading(false)
        return false
      }
    },
    [addToast]
  )

  return (
    <DonationContext.Provider
      value={{
        donate,
        loading
      }}>
      {children}
    </DonationContext.Provider>
  )
}

export function useDonation(): DonationContextData {
  const context = useContext(DonationContext)

  return context
}
