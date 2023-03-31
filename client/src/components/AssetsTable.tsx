import { DataGrid } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'

import { formatCurrency } from '@coingecko/cryptoformat'
import type { GridColDef } from '@mui/x-data-grid'
import { LoadingPage } from '../components'
const formatCompact = Intl.NumberFormat('en', { notation: 'compact' })

const columns: GridColDef[] = [
  {
    field: 'rank',
    headerName: 'Rank',
    width: 65,
    sortable: false,
    align: 'center',
  },
  {
    field: 'name',
    headerName: 'Coin',
    minWidth: 200,
    flex: 1,
    renderCell: (params) => (
      <>
        <img
          className='asset-icon'
          loading='lazy'
          src={`https://assets.coincap.io/assets/icons/${String(
            params.row.symbol,
          ).toLowerCase()}@2x.png`}
          alt={params.row.symbol}
        />
        <div>
          <Link to={`/assets/${params.row.id}`}>
            <strong>{params.row.name}</strong>
            <p>
              <small className='text-gray'>{params.row.symbol}</small>
            </p>
          </Link>
        </div>
      </>
    ),
  },
  {
    field: 'priceUsd',
    headerName: 'Price',
    minWidth: 100,
    flex: 1,
    renderCell: (params) => formatCurrency(params.value, 'USD', 'en'),
  },
  {
    field: 'changePercent24Hr',
    headerName: 'Change 24h',
    flex: 1,
    renderCell: (params) => (
      <span className={params.value > 0 ? 'green' : 'red'}>{Number(params.value).toFixed(2)}%</span>
    ),
  },
  {
    field: 'marketCapUsd',
    headerName: 'Market Cap',
    flex: 1,
    renderCell: (params) => `$${formatCompact.format(params.value)}`,
  },
  {
    field: 'supply',
    headerName: 'Supply',
    flex: 1,
    renderCell: (params) => formatCurrency(Number(params.value), '', 'en'),
  },
  {
    field: 'maxSupply',
    headerName: 'Max. Supply',
    flex: 1,
    renderCell: (params) =>
      params.value > 0 ? formatCurrency(Number(params.value), '', 'en') : '-',
  },
]

const AssetsTable = () => {
  const { data: assets, isLoading } = useQuery(['topAssets'], () =>
    fetch('/api/assets')
      .then((res) => res.json())
      .then((res) => res.data),
  )

  if (isLoading)
    return (
      <div className='relative'>
        <LoadingPage />
      </div>
    )

  return (
    <DataGrid
      rows={assets}
      columns={columns}
      sx={{
        borderColor: '#3e3e3e',
        bgcolor: '#27272b',
        color: '#ffffffde',
        borderBlockColor: '#3e3e3e',
        borderBlockTopColor: '#3e3e3e',
        fontFamily: 'Rubik',
        fontSize: '1em',
        '& .MuiDataGrid-row:hover': {
          bgcolor: 'rgba(0,0,0,.2)',
        },
        '& .MuiDataGrid-cell': {
          borderBottomColor: '#3e3e3e',
          padding: '1em',
        },
        '& .MuiDataGrid-cell:focus': {
          outlineColor: 'transparent',
        },
        '& .MuiDataGrid-columnSeparator': {
          color: '#3e3e3e',
        },
        '& .MuiDataGrid-columnHeaders': {
          border: 'none',
        },
        '& .MuiDataGrid-columnHeader': {
          textAlign: 'center',
        },
        '& .MuiDataGrid-columnHeaderTitle': {
          fontWeight: 'bold',
        },
        '& .MuiDataGrid-columnHeader:focus': {
          outlineColor: 'transparent',
        },
        '& .MuiDataGrid-sortIcon': {
          color: 'white',
        },
        '& .MuiDataGrid-footerContainer': {
          borderColor: '#3e3e3e',
        },
        '& .MuiTablePagination-toolbar': {
          color: '#ffffffde',
        },
      }}
      initialState={{
        pagination: { paginationModel: { pageSize: 25 } },
      }}
      autoHeight
      rowHeight={50}
      disableRowSelectionOnClick
      disableColumnSelector
      disableColumnMenu
    />
  )
}

export default AssetsTable