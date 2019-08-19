import React from 'react'
import styled from 'styled-components'


const InfoContent = styled.div`
	padding: 0.5em;
`

const NameText = styled.h1`
	transition: all 1s ease-out;
	font-size: 1.3em;
	font-weight: 500;
	margin: 0;
`

const LocationText = styled.span`
	transition: all 1s ease-out;
	font-size: 0.875em;
	font-weight: 500;
`

const TypeText = styled.span`
	transition: all 1s ease-out;
	font-size: 0.75em;
	font-weight: 300;
	padding: 0.5em;
	vertical-align: 20%;
`

const Container = styled.div`
    background-color: rgba(0,0,0,0.4);
	display: flex;
	align-items: flex-start;
	padding: 0.8em 0.5em;
    margin-bottom: 0.2em;
	&:hover {
		cursor: pointer;
		${NameText} {
			font-size: 1.4em;
		}
		${TypeText} {
			font-size: 0.8em;
		}
		${LocationText} {
			font-size: 0.9em;
		}
	}
`

const clickWrapper = styled.span``

export default (props) => (
	<Container onClick={props.clickHandler}>
		<InfoContent>
			<NameText>{props.name}</NameText>
			<LocationText>{props.shortLocation}</LocationText>
            <div>
			    <TypeText>{props.type} {props.discovered ? '- Encontrada' : '- Desconhecida'}</TypeText>
            </div>
		</InfoContent>
	</Container>
)

