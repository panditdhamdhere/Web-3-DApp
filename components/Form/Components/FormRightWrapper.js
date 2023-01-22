import styled from "styled-components"

const FormRightWrapper = () => {
  return (
    <FormRight>
      <FormInput>
        <FormRow>
          <RowFirstInput>
            <label>Required Amount</label>
          </RowFirstInput>
          <Input></Input>
        </FormRow>
      </FormInput>

    </FormRight>
  )
}


const FormRight = styled.div`
width: 48%;
`
const FormRow = styled.div`
display: flex;
justify-content: space-between;
width: 100%;

`

const FormInput = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto';
margin-top: 10px;
`

const Input = styled.input`
padding: 15px;
background-color: ${(props) => props.theme.bgDiv}
color: ${(props) => props.theme.color}
margin-top: 4px;
border: none;
border-radius: 8px;
outline: none;
font-size:large;
width:100% ;
`

const RowFirstInput = styled.div`
display: flex;
flex-direction: column;

`
export default FormRightWrapper