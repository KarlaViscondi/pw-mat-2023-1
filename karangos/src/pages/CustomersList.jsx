import React from 'react';
import  Typography  from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import {format} from 'date-fns';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { Link } from 'react-router-dom';

export default function CustomersList(){
    const [state, setState] = React.useState({
        customers: {}      
    })

    //Desestruturando as variáveis de estado
    const {
        customers
    } = state

    //Este useEffect() será executado apenas uma vez, durante o carregamento da pag
    React.useEffect(() => {
        loadData() //carrega os dados do back
    }, [])
    
    async function loadData(){
        try{
            const result = await fetch('https://api.faustocintra.com.br/customers')

            //requisicao ok
            if(result.ok) setState({...state, customers: await result.json()})
            //requisicao com erro
            else throw new Error(`[HTTP ${result.status}] ${result.statusText}`)
        }
        catch(error){
            //Exibe o erro no console
            console.error(error)
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
            {
            field: 'name',
            headerName: 'Nome',
            width: 300,
            },
            {
            field: 'ident_document',
            headerName: 'CPF',
            // align: 'center',
            width: 150,
            // headerAlign: 'center',
            },
            {
            field: 'birth_date',
            headerName: 'Data nasc',
            // align: 'center',
            width: 150,
            // headerAlign: 'center',
            valueFormatter: params => {
                if(params.value) return format(new Date(params.value), 'dd/MM/yyyy')
                else return ''
                }
            },
            {
            field: 'city',
            headerName: 'Municipio/UF',
            // align: 'center',
            width: 300,
            // headerAlign: 'center',
            //Colocando dois campos na mesma célula
            valueGetter: params => params.row.city + ' - ' + params.row.uf
            },
            {
            field: 'phone',
            headerName: 'Celular',
            width: 150,
            // headerAlign: 'center',
            // align: 'center',
            },
            {
            field: 'email',
            headerName: 'E-mail',
            width: 200,
            },
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
        
    async function handleDeleteButtonClick(id){
        if(confirm('Deseja realmente excluir este item?')){
            try{
                //Faz a chamada ap backend para excluir o cliente
                const result = await fetch(`https://api.faustocintra.com.br/customers/${id}`, {
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

    return (
        <>
            <Typography variant='h1' sx={{mb: '50px'}}>
                Listagem de clientes
            </Typography>

            <Box sx={{display:'flex', justifyContent:'right', mb:'25px'}}> 
                <Link to="new">
                    <Button 
                        color='secondary' 
                        variant="contained" 
                        size='large'
                        startIcon={<AddBoxIcon />}>
                        Cadastrar novo cliente
                    </Button>
                </Link>
            </Box>

            <Paper elevation={4} sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={customers}
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