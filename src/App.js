import React from "react";

import DataGrid, {
	Scrolling,
	Sorting,
	LoadPanel,
	Column,
	ColumnChooser,
	ColumnFixing,
	FilterRow,
	Editing,
	Grouping,
	GroupPanel,
	SearchPanel,
	FilterPanel,
	Format,
} from "devextreme-react/data-grid";
import {
	additionalColumnPrefix,
	generateData,
	numberOfAdditionalColumns,
} from "./data.js";

const dataSource = generateData(3000);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadPanelEnabled: true,
		};
		this.onContentReady = this.onContentReady.bind(this);

		// this.dataGridRef = React.createRef();
	}

	// componentDidMount() {
	// 	Object.entries(dataSource[0])
	// 		.filter(([key]) => {
	// 			return key.startsWith(additionalColumnPrefix);
	// 		})
	// 		.forEach(([key]) => {
	// 			this.dataGridRef.current.instance.addColumn({
	// 				dataField: key,
	// 			});
	// 		});
	// }

	render() {
		const additionalColumns = [];
		for (let i = 0; i < numberOfAdditionalColumns; i++) {
			additionalColumns.push(
				<Column dataField={`${additionalColumnPrefix}${i}`} />
			);
		}
		return (
			<DataGrid
				// ref={this.dataGridRef}
				elementAttr={{
					id: "gridContainer",
				}}
				dataSource={dataSource}
				// customizeColumns={this.customizeColumns}
				onContentReady={this.onContentReady}
				columnResizingMode="widget"
				allowColumnResizing={true}
				showBorders={false}
				showRowLines={true}
				rowAlternationEnabled={true}
				columnAutoWidth={true}
				allowColumnReordering={true}
			>
				<Grouping contextMenuEnabled={true} />
				<GroupPanel visible={true} />
				<Sorting mode="multiple" />
				<SearchPanel visible={true} />
				<ColumnFixing enabled={true} />
				<ColumnChooser enabled={true} />
				<Scrolling mode="virtual" />
				<LoadPanel enabled={this.state.loadPanelEnabled} />
				<FilterRow visible={true} />
				<FilterPanel visible={true} />
				<Editing mode="cell" allowUpdating={true} />
				<Column
					dataField="id"
					caption="ID"
					fixed={true}
					dataType="number"
					minWidth={50}
				/>
				<Column
					dataField="firstName"
					allowFiltering={true}
					allowEditing={true}
				/>
				<Column dataField="lastName" />
				<Column dataField="gender" />
				<Column
					dataField="birthDate"
					dataType="date"
					format="dd/MM/yyyy"
				/>
				<Column
					dataField="sampleCurrency"
					dataType="number"
					alignment="right"
				>
					<Format type="currency" precision={2} />
				</Column>
				{additionalColumns}
				{/* {Object.entries(...)
					.filter(([key]) => {
						return key.startsWith(additionalColumnPrefix);
					})
					.map(([key]) => {
						console.log(key);
						return (
							<Column
								dataField={key}
								caption={key.replace("_", " ")}
							/>
						);
					})} */}
			</DataGrid>
		);
	}

	customizeColumns(columns) {
		columns[0].width = 30;
	}

	onContentReady() {
		this.setState({
			loadPanelEnabled: false,
		});
	}
}

export default App;
