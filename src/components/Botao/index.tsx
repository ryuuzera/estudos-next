import { Button, ButtonProps, TextField } from "@mui/material";
import { ReactNode } from "react";

type BotaoProps = ButtonProps & {
    icon: ReactNode,
    modo: "simples" | "cadastro" | 'formulario'
    tamanho?: 'big' | 'small'
}

const Botao = (props: BotaoProps) =>{
    return (
    <>
    <Button variant='outlined' 
        hidden={(props.modo == 'formulario') ? true : false}
        size={(props.tamanho == 'big') ? 'large' : 'small'}
        color={(props.modo == 'simples') ? 'primary' : 'secondary'} 
        endIcon={props.icon}>{props.title}
    </Button>
    </>
    )
}

export default Botao;