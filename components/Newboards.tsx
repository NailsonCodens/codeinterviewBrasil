import { FC, useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { styled } from 'stitches.config'
import {
  backgroundSkeleton,
  highSkeletonLight,
  heigthSkeletonBoards,
  borderRadiusSkeleton
} from 'css/cssskeleton'

const Newboads = styled('div', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridColumnGap: '15px',
  marginTop: '$1',
  marginBottom: '$1'
})

const Newboad = styled('div', {
  height: 200,
  border: '1px solid  $borderPost',
  background: '$purple',
  borderRadius: '$borderGeneral',
  padding: '$2'
})

type Newboards = {
  living_code_link: string
  name: string
  title: string
  description: string
}

const NewBoards: FC = () => {
  const [newBoards, setnewBoards] = useState<Newboards[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [timeMs, setTimeMs] = useState<number>(2000)

  useEffect(() => {
    const showSkeleton = async () => {
      setTimeout(() => {
        console.log('exibindo')
        setLoading(false)
      }, timeMs)
    }

    showSkeleton()
  }, [timeMs])

  return (
    <>
      <Newboads>
        {loading ? (
          <>
            <Skeleton
              baseColor={backgroundSkeleton}
              highlightColor={highSkeletonLight}
              borderRadius={borderRadiusSkeleton}
              height={heigthSkeletonBoards}
            />
            <Skeleton
              baseColor={backgroundSkeleton}
              highlightColor={highSkeletonLight}
              borderRadius={borderRadiusSkeleton}
              height={heigthSkeletonBoards}
            />
            <Skeleton
              baseColor={backgroundSkeleton}
              highlightColor={highSkeletonLight}
              borderRadius={borderRadiusSkeleton}
              height={heigthSkeletonBoards}
            />
          </>
        ) : (
          <>
            <Newboad></Newboad>
            <Newboad></Newboad>
            <Newboad></Newboad>
          </>
        )}
      </Newboads>
    </>
  )
}

export default NewBoards
