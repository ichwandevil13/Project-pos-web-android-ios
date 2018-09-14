import React from "react";

// react component used to create sweet alerts
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/lab
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

// material-ui icons
import { 
  Save, 
  Print, 
  Delete, 
  FileCopy, 
  FindInPage, 
  Edit, 
  Close, 
  Assignment, 
  ExpandMore } from "@material-ui/icons";


// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardIcon from "../../components/Card/CardIcon";
import CardHeader from "../../components/Card/CardHeader";
import CustomInput from "../../components//CustomInput/CustomInput";

import MasterSatuansStyle from "../../assets/jss/material-dashboard-pro-react/views/extendedTablesStyle";

const actions = [
  { icon: <FileCopy />, name: 'Add' },
  { icon: <Edit />, name: 'Edit' },
  { icon: <Delete />, name: 'Delete' },
  { icon: <Print />, name: 'Print' },
  { icon: <FindInPage />, name: 'Filter' },
];

class MasterRaks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      headdatatables: [{ id: 'nama_Rak', numeric: false, disablePadding: true, label: 'Nama Rak' },
      { id: 'keterangan', numeric: false, disablePadding: true,  label: 'Keterangan' }],
      useFilter: false,
      datatables: [],
      dialopen: false,
      dialhidden: false,
      selected: [],
      FormList: [],
      DataForm: {},
      DataValidation: {}
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.RefreshData();
  }

  hideAlert() {
    this.setState({
      alert: null
    });
  }

  errorAlert(title, message) {
    this.setState({
        alert: (
          <SweetAlert
          danger
          style={{ display: "block", marginTop: "-100px" }}
          title={title}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          >
          {message}
          </SweetAlert>
        )
    });
  }

  successAlert(title, message) {
      this.setState({
          alert: (
            <SweetAlert
            success
            style={{ display: "block", marginTop: "-100px" }}
            title={title}
            onConfirm={() => this.hideAlert()}
            onCancel={() => this.hideAlert()}
            confirmBtnCssClass={
              this.props.classes.button + " " + this.props.classes.success
            }
            >
            {message}
            </SweetAlert>
          )
      });
  }

  warningAlert(title, message) {
    this.setState({
        alert: (
          <SweetAlert
          warning
          style={{ display: "block", marginTop: "-100px" }}
          title={title}
          onConfirm={() => this.hideAlert()}
          onCancel={() => this.hideAlert()}
          confirmBtnCssClass={
            this.props.classes.button + " " + this.props.classes.success
          }
          >
          {message}
          </SweetAlert>
        )
    });
  }
  RefreshData = () => {
    this.getListDataFromApiAsync().then((response) => {
      this.setState({
        datatables:  response.listRak
      });
    })
  }

  isSelected = (index) => {
    return this.state.selected.indexOf(index) !== -1;
  };

  handleRowSelection = (selectedRows) => {
    this.setState({
      selected: selectedRows,
    });
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      active: expanded ? panel : -1
    });
  };

  handleVisibility = () => {
    this.setState(state => ({
      dialopen: false,
      dialhidden: !state.dialhidden,
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      dialopen: !state.dialopen,
    }));
  };

  handleSpeedDial = (actionNama) => {
    if (actionNama == 'Add') {
      this.formAddData({});
    } else
    if (actionNama == 'Edit') {
      if (this.state.selected.length > 0) {
        let idRaw = this.state.selected[0];
        //debugger;
        this.getDataFromApiAsync(idRaw).then((response) => {
          this.setState({
            DataForm:  response
          });
          this.formAddData(response); 
        })
      }else{
        this.warningAlert('Please Select','Pilih salah satu data dibawah')
      }
    }
    this.setState(state => ({
      dialopen: !state.dialopen,
    }));
  };

  handleOpen = () => {
    if (!this.state.dialhidden) {
      this.setState({
        dialopen: true,
      });
    }
  };

  handleClickRow = (event, id) => {
    const { selected } = this.state;
    //debugger;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      //newSelected = newSelected.concat(selected, id);
      newSelected = [id];
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.setState({ selected: newSelected });
  };

  handleClose = () => {
    this.setState({
      dialopen: false,
    });
  };

  closeForm = () => {
    this.setState({
      FormList: [],
      DataForm: {},
      DataValidation: {}
    });
  };
  isSelected = idRak => this.state.selected.indexOf(idRak) !== -1;

  getListDataFromApiAsync() {
    return fetch('http://www.transnet-developer.com/api/Master/Rak/post/FindRak', {
      method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
    }).then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json();
    }).then(function(response) {
        return response;
    }).catch(function(error) {
      throw error;
    });
  }

  postDataFromApiAsync(data) {
    return fetch('http://www.transnet-developer.com/api/Master/Rak/post/AddEditRak', {
      method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json();
    }).then(function(response) {
        return response;
    }).catch(function(error) {
        throw error;
    });
  }

  getDataFromApiAsync(id) {
    return fetch('http://www.transnet-developer.com/api/Master/Rak/get/GetRak?IDRak='+id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json();
    }).then(function(response) {
        return response;
    }).catch(function(error) {
        throw error;
    });
  }

  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }

  toggleFilter(value) {
    this.setState({
      useFilter: !this.state.useFilter
    });
  }
  formAddData = data => {
    const { classes } = this.props;
    const registerClick = () => {
      //debugger;
      let data = this.state.DataForm;
      this.postDataFromApiAsync(data).then(() => {
        this.RefreshData();
        this.closeForm();
        this.successAlert('Succes', 'Data Berhasil di simpan');
      }).catch((error) => {
        error.then((result) => {
          this.errorAlert('Error System', result.toString() );
        })
      })
    }

    const form = (
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="success" icon>
              <CardIcon color="success">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Form Rak</h4>
            </CardHeader>
            <CardBody>
              <form>
                <CustomInput
                  //success={DataValidation.nama_Rak}
                  //error={!DataValidation.nama_Rak}
                  labelText="Nama Rak *"
                  id="__namaRak"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => this.setState(
                      {
                        DataForm: {
                          ...this.state.DataForm,
                          nama_Rak: event.target.value
                        }
                    }),
                    //onChange: event => { DataValidation.nama_Rak = !DataValidation.nama_Rak },
                    type: "text",
                    value: this.state.DataForm.nama_Rak,
                    defaultValue: data.nama_Rak
                  }}
                />
                <CustomInput
                  //success={DataValidation.keterangan}
                  //error={!DataValidation.keterangan}
                  labelText="keterangan *"
                  id="__keterangan"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    onChange: event => this.setState(
                      {
                        DataForm: {
                          ...this.state.DataForm,
                          keterangan: event.target.value
                        }
                    }),
                    //onChange: event => { DataValidation.keterangan = !DataValidation.nama_Rak },
                    type: "text",
                    value: this.state.DataForm.keterangan,
                    defaultValue: data.keterangan
                  }}
                />
                <div className={classes.formCategory}>
                  <small>*</small> Required fields
                </div>
                <Button
                  color="success"
                  onClick={registerClick}
                  className={classes.registerButton}
                >
                  <Save/> Save
                </Button>
                <Button
                  color="warning"
                  onClick={this.closeForm}
                  className={classes.registerButton}
                >
                  <Close/> Cancel
                </Button>
              </form>
            </CardBody>
          </Card>
        </GridItem>
      )
    this.setState({
      FormList: [form]
    });
  }

  render() {
    const { order, orderBy, classes  } = this.props;
    const { dialhidden, dialopen } = this.state;
    let isTouch;
    if (typeof document !== 'undefined') {
      isTouch = 'ontouchstart' in document.documentElement;
    }

    return (
      <GridContainer>
        {this.state.FormList.map((n, key) => {
          return (n)
        })}
        <GridItem xs={12}>
          <Card>
            <CardHeader color="rose" icon>
              <CardIcon color="rose">
                <Assignment />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>Rak Table</h4>
            </CardHeader>
            <CardBody>
            <div className={classes.tableWrapper}>
              <Table className={classes.table} aria-labelledby="tableTitle">
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    #
                  </TableCell>
                  { this.state.headdatatables.map(row => {
                    return (
                      <TableCell
                        key={row.id}
                        numeric={row.numeric}
                        padding={row.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === row.id ? order : false}
                      >
                        <Tooltip
                          title="Sort"
                          placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                          enterDelay={300}
                        >
                          <TableSortLabel>
                            {row.label}
                          </TableSortLabel>
                        </Tooltip>
                      </TableCell>
                    );
                  }, this)}
                </TableRow>
              </TableHead>
                <TableBody>
                  { this.state.datatables.map((n, key) => {
                      const isSelected = this.isSelected(n.idRak);
                      return (
                        <TableRow
                          hover
                          onClick={event => this.handleClickRow(event, n.idRak)}
                          role="checkbox"
                          aria-checked={isSelected}
                          tabIndex={-1}
                          key={n.idRak}
                          selected={isSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox checked={isSelected} />
                          </TableCell>
                          <TableCell component="th" scope="row" padding="none">
                            {n.nama_Rak}
                          </TableCell>
                          <TableCell>{n.keterangan}</TableCell>
                          <TableCell numeric>{n.contain}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </div>
            </CardBody>
          </Card>
          <Button color="info" round>
            <ExpandMore /> Load More
          </Button>
          <SpeedDial
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            hidden={dialhidden}
            icon={<SpeedDialIcon />}
            onBlur={this.handleClose}
            onClick={this.handleClick}
            onClose={this.handleClose}
            onFocus={isTouch ? undefined : this.handleOpen}
            onMouseEnter={isTouch ? undefined : this.handleOpen}
            onMouseLeave={this.handleClose}
            open={dialopen}
          >
            {actions.map(action => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={()=>{this.handleSpeedDial(action.name)}}
              />
            ))}
          </SpeedDial>
        </GridItem>
        {this.state.alert}
      </GridContainer>
    );
  }
}

export default withStyles(MasterSatuansStyle)(MasterRaks);



// WEBPACK FOOTER //
// ./src/views/Tables/MasterSatuans