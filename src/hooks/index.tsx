import { DonationProvider } from './donation'
import { ToastProvider } from './toast'

const AppProvider: React.FC = ({ children }) => (
  <ToastProvider>
    <DonationProvider>{children}</DonationProvider>
  </ToastProvider>
)

export default AppProvider
