import Image from 'next/image'
import Button from '../../../components/Button'
import { Header } from '../../../components/Header'
import { Select } from '../../../components/Select'
import * as S from '../../../styles/pages/project'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCallback, useState } from 'react'
import { IMaskInput } from 'react-imask'
import { CurrencyInput } from '../../../components/CurrencyInputOld'
import { tryGetPreviewData } from 'next/dist/server/api-utils'
import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import { useDonation } from '../../../hooks/donation'
type DonationFormData = {
  price: string
  method: string
}
interface ProjectsProps {
  _id: string
  name: string
  description: string
  imageUrl: string
  slug: string
}
interface Project {
  project: ProjectsProps
}

const schemaDonation = yup.object({
  price: yup.string().required('Valor Obrigatório'),
  method: yup.string().required('Meio de pagamento obrigatório')
})
export default function Project({ project }: Project): JSX.Element {
  const { donate, loading } = useDonation()
  const [teste, setTeste] = useState('')
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaDonation)
  })
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }
  const currencyMask = (value: string | number): string => {
    return String(value)
      .replace(/\D/g, '')
      .replace(/(\d)/, 'R$ $1')
      .replace(/(\d)(\d{2})$/, '$1,$2')
      .replace(/(?=(\d{3})+(\D))\B/g, '.')
  }
  const handleCreateDonation = useCallback(data => {
    const price = data.price
      .replace('R$ ', '')
      .replace('.', '')
      .replace(',', '')
    console.log(price)
    console.log('reform', currencyMask(price))
    donate({ project: project._id, price, method: data.method })
  }, [])

  return (
    <S.Container>
      <Header />
      <S.Grid>
        <S.ContentLeft>
          <h1>{project.name}</h1>
          <Image
            width={1200}
            height={828}
            loader={() => project.imageUrl}
            src={project.imageUrl || '/noimage.png'}
            unoptimized
          />
          <p>{project.description}</p>
        </S.ContentLeft>
        <S.ContentRight onSubmit={handleSubmit(handleCreateDonation)}>
          <h1>Faça sua doação</h1>

          <CurrencyInput
            control={control}
            errorMessage={errors.price?.message}
            nameInput="price"
            placeholder="Valor"
          />

          <Select
            {...register('method')}
            errorMessage={errors.method?.message}
          />
          <S.ButtonBox>
            <Button title="Doar" type="submit" />
          </S.ButtonBox>
        </S.ContentRight>
      </S.Grid>
    </S.Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const { slug } = params
  try {
    const response = await api.get(`projects-public/${slug}`)
    return {
      props: {
        project: response.data
      }
    }
  } catch (error) {
    if (error) {
      return {
        redirect: {
          destination: `/`,
          permanent: false
        }
      }
    }
  }
}
