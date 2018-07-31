import React from 'react';
import ItemsTableCell from '../../components/ItemsTableCell';
import ItemsTableValue from '../../components/ItemsTableValue';
import nesProp from 'nested-property';

var CTColumn = React.createClass({
	displayName: 'Custom Type',
	propTypes: {
		col: React.PropTypes.object,
		data: React.PropTypes.object,
		linkTo: React.PropTypes.string,
	},
	renderVirtualVal(val) {
		if ( !val ) {
			return '';
		}

		if ( Array.isArray(val) ) {
			return val.reduce((sum, current)=>{
				return sum + ', '+JSON.stringify(current)
			}, '')
		}

		if ( typeof val == 'object') {
			return JSON.stringify(val);
		}

		return  val;
	},
	getValue () {
		// cropping text is important for textarea, which uses this column
		const value = this.props.data.fields[this.props.col.path];
		const objValue = value ? JSON.parse(value) : {};

		let virtualVal = null
		if ( this.props.col.virtualPath ) {
			virtualVal = objValue[this.props.col.virtualPath]
			if ( this.props.col.virtualPath == 'recipients' ) {
				virtualVal = virtualVal.reduce((sum, current)=>{
					return sum + (sum ? (', ') : '') +current.label
				}, '');
			}

			if ( this.props.col.virtualPath == 'content.*.independents.indextype' ) {
				virtualVal = [];
				let wProdIT = nesProp.get(objValue, 'content.willemotProduction.independents.indextype.type');
				let wClaimIT = nesProp.get(objValue, 'content.willemotClaims.independents.indextype.type');
				let wThirdPartIT = nesProp.get(objValue, 'content.thirdParties.independents.indextype.type');

				console.log( "objValue objValue objValue", objValue);
				console.log( "virtualVal virtualVal virtualVal", virtualVal, wProdIT, wClaimIT, wThirdPartIT);

				if( wProdIT ) { virtualVal.push(wProdIT); }
				if( wClaimIT ) { virtualVal.push(wClaimIT); }
				if( wThirdPartIT ) { virtualVal.push(wThirdPartIT); }

				virtualVal = virtualVal.join(', ')
			}
		}
		return value ? (virtualVal ? this.renderVirtualVal(virtualVal) : value) : null;
		//return value ? value.substr(0, 100) : null;
	},
	render () {
		const value = this.getValue();
		const empty = !value && this.props.linkTo ? true : false;
		return (
			<ItemsTableCell>
				<ItemsTableValue to={this.props.linkTo} empty={empty} padded interior field={this.props.col.type}>
					{value}
				</ItemsTableValue>
			</ItemsTableCell>
		);
	},
});

module.exports = CTColumn;
