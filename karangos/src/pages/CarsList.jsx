import React from 'react';
import  Typography  from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

//Função da lista de carros com variaveis de estado
export default function CarsList(){
    const [state, setState] = React.useState({
        cars: {}      
    })

    //Desestruturando as variáveis de estado
    const {
        cars
    } = state

    //Este useEffect() será executado apenas uma vez, durante o carregamento da pag
    React.useEffect(() => {
        loadData() //carrega os dados do back
    }, [])
    
    async function loadData(){
        try{
            const result = await fetch('https://api.faustocintra.com.br/cars') //banco de dados novo, referente a lista de carros

            //requisicao ok
            if(result.ok) setState({...state, cars: await result.json()})
            //requisicao com erro
            else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)
        }
        catch(error){
            //Exibe o erro no console
            console.error(error)
        }
    }
    //field: nome que está no banco
    //headerName: nome que vai ser exibido 
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
            {
            field: 'brand',
            headerName: 'Marca',
            width: 150,
            },
            {
            field: 'model',
            headerName: 'Modelo',
            // align: 'center',
            width: 150,
            // headerAlign: 'center',
            },
            {
            field: 'color',
            headerName: 'Cor',
            // align: 'center',
            width: 150,
            // headerAlign: 'center',
            },
            {
            field: 'year_manufacture',
            headerName: 'Ano de fabricação',
            // align: 'center',
            width: 150,
            // headerAlign: 'center',
            },
            {
            field: 'imported',
            headerName: 'Importado (1) - não importado (0)',
            width: 250,
            // headerAlign: 'center',
            align: 'center',
            },
            {
            field: 'plates',
            headerName: 'Placas',
            width: 150,
            },
            {
            field: 'selling_price',
            headerName: 'Preço de venda',
            width: 150,
            },
            //botao editar - rediciona para a pagina de cadastro de novos carros
            {
            field: 'edit',
            headerName: 'Editar',
            width: 90,
            align: 'center',
            renderCell: params => 
                <Link to={'./' + params.id}>
                    <IconButton aria-label='Editar'>
                        <EditIcon></EditIcon>
                    </IconButton>
                </Link>
            },
            //botao que deleta um carro
            {
            field: 'delete',
            headerName: 'Excluir',
            width: 90,
            align: 'center',
            renderCell: params =>  <IconButton aria-label='Delete' onClick={() => handleDeleteButtonClick(params.id)}>
                <DeleteForeverIcon color='error'></DeleteForeverIcon>
            </IconButton>
            },
    ];
    //funcao para deletar um carro ativada pelo botao 'excluir'
    async function handleDeleteButtonClick(id){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //Faz a chamada p/ backend para excluir o cliente
                const result = await fetch(`https://api.faustocintra.com.br/cars/${id}`, {
                    method: 'DELETE'
                })
                //Se a exclusão tiver sido feita com sucesso, atualiza a listagem
                if(result.ok) loadData()
                alert('Exclusão efetuada com sucesso!')
            }
            catch(error){
                console.error(error)
            }
        }
    }
    //Foi adicionado um botão para cadastrar novo carro
    //E o data grid para mostrar a listagem de carros que ja estão cadastrados
    return (
        <>
            <Typography variant='h1' sx={{mb: '50px'}}>
                Listagem de carros
            </Typography>

            <Box sx={{display:'flex', justifyContent:'right', mb:'25px'}}> 
                <Link to="new">
                    <Button 
                        color='secondary' 
                        variant="contained" 
                        size='large'
                        startIcon={<AddBoxIcon />}>
                        Cadastrar novo carro
                    </Button>
                </Link>
            </Box>

            <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={cars}
                    columns={columns}
                    initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 5,
                        },
                    },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Paper>
        </>
    )
}