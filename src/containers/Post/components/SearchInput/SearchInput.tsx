import React, { FC, useState, ChangeEvent, KeyboardEvent } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { SVG_SPRITE } from 'src/shared/constants'
import svgIcons from 'src/static/svg-sprite.svg'

const SearchInputWrapper = styled.div`
  position: relative;
`

const Input = styled.input`
  margin-left: 1.6rem;
  padding: 0.8rem;
  width: 13rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.text.header};
  background: ${({ theme }) => theme.background.bestAlbumCard};
  border: none;
  border-radius: 0.3rem;
  outline: none;
`

const SearchSvg = styled.svg`
  position: absolute;
  margin: 0 !important;
  top: 0.73rem;
  right: 0.73rem;
  width: 1.2rem !important;
  height: 1.2rem !important;
`

const SearchInput: FC = () => {
  const router = useRouter()

  const [val, setVal] = useState('')
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) =>
    setVal(e.target.value)

  const onSubmit = (e: KeyboardEvent<HTMLInputElement>) => {
    const event = e || window.event
    const key = event.which || event.keyCode || event.charCode
    if (key === 13) {
      router.push({
        pathname: '/post',
        search: val.trim() === '' ? undefined : `?title=${val}`,
      })
    }
  }

  return (
    <SearchInputWrapper>
      <Input
        type="text"
        onChange={handleInputChange}
        onKeyUp={(e) => onSubmit(e)}
      />
      <SearchSvg>
        <use xlinkHref={`${svgIcons}${SVG_SPRITE.search1}`} />
      </SearchSvg>
    </SearchInputWrapper>
  )
}

export default SearchInput
