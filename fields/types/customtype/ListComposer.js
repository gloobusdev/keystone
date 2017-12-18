var React = require('react');

import _ from 'lodash';
import { Flex } from 'react-flex';
import 'react-flex/index.css';
import cs from 'classnames';
import styles from './CTstyle.css';

var Button = require('elemental').Button;
var FormField = require('elemental').FormField;
var FormInput = require('elemental').FormInput;
var FormSelect = require('elemental').FormSelect;

export default class ListComposer extends React.Component {

	componentDidMount() {
		this.setState({
			selectData: this.filerSelectedsFromAll(),
		});
	};

	componentWillMount() {
		let allValues = this.props && this.props.allValues || {values:[]};
		//allValues.values.unshift({value:'', label: 'Please select'});
		let allSelected = this.props && this.props.allSelected || [];

		this.state = {
			allValues: allValues,
			selected: {value: ''},
			allSelected: allSelected,
			selectData: allValues,
		};
	}

	componentWillUpdate(nextProps, nextState) {
		if (JSON.stringify(nextProps.allValues) !== JSON.stringify(this.state.allValues)) {
			this.setState({
				allValues: nextProps.allValues,
				selectData: this.filerSelectedsFromAll(),
			}, ()=>{
				this.setState({
					selectData: this.filerSelectedsFromAll(),
				});
			});
		};
	}


	filerSelectedsFromAll() {
		return {
			...this.state.allValues,
			...{
				values:	!!this.state.allValues &&
				this.state.allValues.values &&
				(this.state.allValues.values.length > 0) &&
				this.state.allValues.values.filter(i => {
					let result = true;
					if (this.state.allSelected && this.state.allSelected.length > 0) {
						let remains = this.state.allSelected.filter(j => j.value == i.value);
						result = remains && (remains.length > 0) ? false : true;
					}
					return result;
				}) || []
			}
		};
	}

	addComposerItem() {
		const selected = this.state.selected;
		if (!selected || !selected.value || !selected.label) {
			return false;
		}
		let allSelected =this.state.allSelected || [];
		const isAlreadyAdded = !!allSelected && (allSelected.length > 0) && allSelected.filter(i => (i.value == selected.value));
		if (!isAlreadyAdded || !(isAlreadyAdded.length > 0)) {
			allSelected.push({
				value: selected.value,
				label: selected.label,
			});
		}
		// update the new list with selected values, and remove from select the already added selected.
		this.setState({
			selected: {value: ''},
			selectData: {values:[]},
		},() => {
			this.forceUpdate();
			this.setState({
				allSelected: allSelected,
				selectData: this.filerSelectedsFromAll(),
			}, () => {
				this.forceUpdate();
			});
		});

		// callback of component
		this.props.onChange(allSelected);
	}

	removeComposerItem(item) {
		if (!item || !item.value) {
			return false;
		}

		let allSelected =this.state.allSelected || [], index = -1;
		if (allSelected && allSelected.length > 0) {
			allSelected.forEach((i, key) => {
				index = i.value == item.value ? key : index;
			});
		}

		if (index > -1) {
			allSelected.splice(index, 1);
		}

		// update the new list with selected values, and remove from select the already added selected.
		this.setState({
			allSelected: allSelected,
			selectData: this.filerSelectedsFromAll(),
		});

		// callback of component
		this.props.onChange(allSelected);
	}

	setDefaultComposerItem(item) {
		if (!item || !item.value) {
			return false;
		}

		let allSelected = this.state.allSelected || [], index = -1;
		if (allSelected && allSelected.length > 0) {
			allSelected.forEach((i, key) => {
				index = i.value == item.value ? key : index;
				allSelected[key].default = false;
			});
		}

		if (index > -1) {
			allSelected[index].default = true;
		}

		// update the new list with selected values, and remove from select the already added selected.
		this.setState({
			allSelected: allSelected,
			selectData: this.filerSelectedsFromAll(),
		});

		// callback of component
		this.props.onChange(allSelected);
	}


	selectComposerItem(selectedValue) {
		const allValues = this.state.allValues || {values: []};
		const oneElemArray = !!allValues && allValues.values && allValues.values.length > 0 && allValues.values.filter(i => i.value == selectedValue);
		this.setState({
			selected: oneElemArray && oneElemArray.length > 0 && oneElemArray[0] || null,
		});
		return true;
	}

	renderComposerItem(value, key) {
		const {options} = this.props;
		let classNamesHolder = [
			"octicon",
			"octicon-pin",
			styles.recipientPinIcon
		];
		let clsNamesForPingHolder = [styles.recipientPinIconHolder];

		if ( value && value.default ) {
			classNamesHolder.push(styles.pinedIcon);
			clsNamesForPingHolder.push(styles.pinedIcon);
		}

		return (
			<Flex row alignItems="center" className={cs(styles.recipientItem, styles.noselect)} key={"key"+key+"item"}>
				{options && options.handleDefault && <Flex column flex={1} key={"key1itemPiece"}>
					<span className={cs(clsNamesForPingHolder)}
						onClick={() => this.setDefaultComposerItem(value)}>
						<span className={cs(classNamesHolder)}/>
					</span>
				</Flex>}
				<Flex column flex={10} className={styles.recipientName} key={"key2itemPiece"}>
					{value && value.label || "No name"}
				</Flex>
				{value && !value.default && <Flex column flex={1} key={"key3itemPiece"}>
					<span className={styles.recipientXIconHolder}
						onClick={() => this.removeComposerItem(value)}>
						<span className={cs("octicon", "octicon-x", styles.recipientXIcon)}/>
					</span>
				</Flex> || null}
			</Flex>
		);
	}

	render() {
		let allSelected = this.state.allSelected || [];
		let allValues = this.state.allValues || {values:[]};
		const selected = this.state.selectedRecipient;
		return (
			<Flex column flex={1} alignItems="stretch">
				<Flex row flex={1} alignItems="start" className={cs(styles.collectorItemsHolder, styles.noselect)}
					key={"keyRecipientComposerComponent1"}>
					{allSelected && allSelected.map((recipItem, recipKey)=>{
						return this.renderComposerItem(recipItem, recipKey);
					})}
				</Flex>

				<Flex row flex={1} alignItems="end" className={cs(styles.noselect)}
					key={"keyRecipientComposerComponent2"}>
					<Flex flex={6} column>
					</Flex>
					<Flex flex={6} column alignItems="start" className={cs(styles.recipientItemAddHold, styles.left)}>
						<FormSelect
							onChange={(val) => this.selectComposerItem(val)}
							options={this.state.selectData && this.state.selectData.values || []}
							value={selected && selected.value}
							placeholder={'asdasd'}
						/>
					</Flex>
					<Flex flex={1} column alignItems="end" className={cs(styles.recipientItemAddHold, styles.right)}>
						<Button ref="button"
							onClick={() => this.addComposerItem()}
							className={styles.addButton}>
							<span className="octicon octicon-plus" />
						</Button>
					</Flex>
				</Flex>
			</Flex>
		);
	}
};

ListComposer.propTypes = {
	allValues: React.PropTypes.object.isRequired,
	allSelected: React.PropTypes.array,
	onChange: React.PropTypes.func.isRequired,
	options: React.PropTypes.object,
};
