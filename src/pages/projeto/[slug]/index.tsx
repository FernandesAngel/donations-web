import Image from 'next/image'
import Button from '../../../components/Button'
import { Header } from '../../../components/Header'
import { Select } from '../../../components/Select'
import * as S from '../../../styles/pages/project'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useCallback } from 'react'
import { CurrencyInput } from '../../../components/CurrencyInput'
import { GetServerSideProps } from 'next'
import { api } from '../../../services/api'
import { useDonation } from '../../../hooks/donation'
import { Project } from './interface'

const schemaDonation = yup.object({
  price: yup.string().required('Valor Obrigatório'),
  method: yup.string().required('Meio de pagamento obrigatório')
})
export default function Project({ project }: Project): JSX.Element {
  const { donate, loading } = useDonation()
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schemaDonation)
  })

  const handleCreateDonation = useCallback(
    async data => {
      const { method, price } = data
      const response = await donate({
        project: project._id,
        method,
        price: price
      })
      if (response) {
        reset()
      }
    },
    [reset]
  )

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
            <Button title="Doar" type="submit" load={loading} />
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
