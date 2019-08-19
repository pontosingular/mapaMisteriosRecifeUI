import React, { useState } from 'react'
import styled from 'styled-components'

const InputText = styled.input`
	font-size: 1em;
	border: none;
	width: 100%;
	color: white;
	padding-bottom: 0.8em;
	background-color: transparent;
	&::placeholder {
		color: #c1ced4;
	}
	&:focus {
		outline: none;
	}
`

const InputWrapper = styled.div`
	border-bottom: 1px solid #c1ced4;
	margin-bottom: 1em;
	display: flex;
	transition: all 0.5 ease-out;
`

const TextInput = props => {
	return (
		<InputWrapper>
			<InputText
				placeholder={props.placeholder}
				onChange={props.onChange}
				value={props.value}
				type={props.type}
				name={props.name}
			/>
		</InputWrapper>
	)
}

export default TextInput
