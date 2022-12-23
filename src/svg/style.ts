import styled from "styled-components"

export  const Wrapper = styled('div')<{size:number}>`
width:${({ size }) => (size)};
height:${({ size }) => (size)};
`