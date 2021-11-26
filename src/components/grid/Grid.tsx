import React, {useMemo, useCallback, useEffect, useState} from 'react';
import DataTable from 'react-data-table-component';
import tableDataItems from '../../data/gridData';


function Line() {
  const [selectedRows, setSelectedRows] = useState([]);

	useEffect(() => {
		console.log('state', selectedRows);
	}, [selectedRows]);

	const handleButtonClick = () => {
		
		console.log('clicked');
	};

	const handleChange = useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	const columns = useMemo(
		() => [
			{
				
				cell: () => <button onClick={handleButtonClick}>Action</button>,
				ignoreRowClick: true,
				allowOverflow: true,
				button: true,
			},
			{
				name: 'Name',
				selector: (row:any) => row.name,
				sortable: true,
				grow: 2,
			},
			{
				name: 'Type',
				selector: (row:any) => row.type,
				sortable: true,
			},
			{
				name: 'Calories (g)',
				selector: (row:any) => row.calories,
				sortable: true,
				right: true,
			},
			{
				name: 'Fat (g)',
				selector: (row:any) => row.fat,
				sortable: true,
				right: true,
			},
			{
				name: 'Carbs (g)',
				selector: (row:any) => row.carbs,
				sortable: true,
				right: true,
			},
			{
				name: 'Protein (g)',
				selector: (row:any) => row.protein,
				sortable: true,
				right: true,
			},
			{
				name: 'Sodium (mg)',
				selector: (row:any) => row.sodium,
				sortable: true,
				right: true,
			},
			{
				name: 'Calcium (%)',
				selector: (row:any) => row.calcium,
				sortable: true,
				right: true,
			},
			{
				name: 'Iron (%)',
				selector: (row:any) => row.iron,
				sortable: true,
				right: true,
			},
		],
		[],
	);
 return (
		<DataTable
			title="Desserts"
			data={tableDataItems}
			columns={columns}
			selectableRows
			onSelectedRowsChange={handleChange}
		/>
	);

}

export default Line;
