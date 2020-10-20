import React from "react";

import DataGrid, {
  Scrolling,
  Sorting,
  LoadPanel
} from "devextreme-react/data-grid";
import { generateData } from "./data.js";

const dataSource = generateData(3000);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadPanelEnabled: true
    };
    this.onContentReady = this.onContentReady.bind(this);
  }

  render() {
    return (
      <DataGrid
        elementAttr={{
          id: "gridContainer"
        }}
        dataSource={dataSource}
        showBorders={true}
        // customizeColumns={this.customizeColumns}
        onContentReady={this.onContentReady}
        allowColumnResizing={true}
        columnResizingMode="nextColumn"
      >
        <Sorting mode="multiple" />
        <Scrolling mode="virtual" />
        <LoadPanel enabled={this.state.loadPanelEnabled} />
      </DataGrid>
    );
  }

  customizeColumns(columns) {
    columns[0].width = 30;
  }

  onContentReady() {
    this.setState({
      loadPanelEnabled: false
    });
  }
}

export default App;
