import Field from '../Field';
import React, { PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { FormInput, FormSelect, Button } from 'elemental';

import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './CTstyle.css';
import { Flex, Item } from 'react-flex';
import 'react-flex/index.css';
import cs from 'classnames';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import ListComposer from './ListComposer';
import TabRow from './TabRow';

function reduceValues (values) {
	return values.map(i => i.value);
}

module.exports = Field.create({
	displayName: 'Custom Type',
	/* propTypes: {
		formatString: React.PropTypes.object,
	}, */
	statics: {
		type: 'CT',
	},
	focusTargetRef: 'customEditor',
//	mixins: [ListComposer],
	getInitialState() {
		const html = this.props.value && this.props.value.html || '<p>Hey this <strong>editor</strong> rocks 😀</p>';
		const contentBlock = htmlToDraft(html);
		let editorState = EditorState.createEmpty();
		if (contentBlock) {
			const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
			editorState = EditorState.createWithContent(contentState);
			this.state = {
				editorState,
			};
		}

		let module = '';
		if ( !Array.isArray(this.props.value) && typeof this.props.value == 'object' ) {
			module = this.props.value.module;
		}
		let allRecipients = this.props && this.props.options && this.props.options.recipients || {values:[]};
		allRecipients.values.unshift({value:'', label: 'Please select recipient'});

		let allModules = this.props && this.props.options && this.props.options.modules || {values:[]};
		allModules.values.unshift({value:'', label: 'Please select module'});

		let allLanguages = this.props && this.props.options && this.props.options.languages || {values:[]};

		let allVariables = this.props && this.props.options && this.props.options.variables || {values:[]};
		allVariables.values.unshift({value: '', label: 'Please select variable'});

		let valueOfState = typeof this.props.values == 'object' && this.props.values.templateContent ?
			this.props.values.templateContent : {};

		try { valueOfState = JSON.parse( valueOfState ); } catch (e) {
			// do nothig, because wrong or deprecated record. We will save a fresh one when save.
		}

		const currentTabRecipient = valueOfState && valueOfState.recipients &&
			Array.isArray(valueOfState.recipients) && valueOfState.recipients.length > 0 &&
			valueOfState.recipients[0] || {value: ''};

		const currentTabLang = allLanguages && allLanguages.values &&
			Array.isArray(allLanguages.values) && allLanguages.values.length > 0 &&
			allLanguages.values[0] || {value: ''};


		return {
			editorState,
			currentTabRecipient: currentTabRecipient,
			currentTabLang: currentTabLang,
			value: valueOfState,
			allRecipients: allRecipients,
			allModules: allModules,
			allLanguages: allLanguages,
			allVariables: allVariables,
		};
	},

	componentWillReceiveProps: function (nextProps) {
		/* if (JSON.stringify(nextProps.value) !== JSON.stringify(this.state.value)) {
			this.setState({
				value: nextProps.value,
			});
		} */
	},

	getDefaultProps () {
		return {
			/* ...this.props, // not exist yet
			...{options: {
				...this.props.options,
				...{modules: this.props.options.modules + [{value:'', label: 'AAAAAAAAAAAa'}]}
			}} */
		};
	},

	onEditorStateChange(editorState) {
		// Editor state save
		this.setState({
			editorState,
		});

		// support value for keystone
		this.props.onChange({
			path: this.props.path,
			value: {html: editorState.getCurrentContent()},
		});
	},

	onTabRecipeintSet(tabName) {
		this.setState({
			currentTabRecipient: {value: tabName}
		});
	},

	onTabLangSet(tabName) {
		this.setState({
			currentTabLang: {value: tabName}
		});
	},

	renderSecondLevelTabs() {
		const { currentTabLang } = this.state;
		const { languages } = this.props.options;
		return (
			<Flex column flex={1} alignItems="stretch">
				<Item row alignItems="stretch" flex={1} key={"primaryTabs"}>
					{languages && languages.values && languages.map((tab, index) => {
						return (
							<Flex column alignItems="start" key={"primaryTabNumber"+index}
								className={cs(styles.tab, styles.noselect, (tab.name === currentTabLang) ? styles.active : null)}
								onClick={(ev)=>{this.onTabLangSet(tab.name)}}
							>
								{tab.label}
							</Flex>
						);
					})}
				</Item>
				<Item row alignItems="stretch" flex={1} key={"primaryTabContents"}>
					{languages && languages.filter((tab, index) => (tab.name === currentTabLang))
						.map((tab, index) => {
							return (
								<Flex column alignItems="start" flex={1} key={"primaryTabContentNumber"+index}
									className={cs(styles.tabContent)}
								>
									{tab.name + " === " + currentTabLangs + " -> " }
								</Flex>
							);
						}
					)
				}
				</Item>
			</Flex>);
	},
	updateValue (changedProp) {
		this.props.onChange({ ...this.props.value, ...changedProp });
	},
	selectModule(module) {
		this.setState({
			value: { ...this.state.value, ...{module: module}},
		});
		this.updateValue({ module });
	},
	renderModuleSelector() {
		const modules = this.state.allModules;
		const { module } = this.state.value || {module: ''};
		const selected = modules && modules.values && modules.values.filter(i => i.value === module)[0];
		return (
			<FormSelect
				onChange={this.selectModule}
				options={modules && modules.values || []}
				value={selected && selected.value}
			/>
		);
	},
	renderVariableSelector() {
		return(
			<Flex column flex={1} alignItems="stretch" key={"recipientSelectorKey"}>
				<span className={styles.fieldLabel}>{"Variable list for this recipient"}</span>
				<ListComposer
					allValues={this.state.allVariables}
					allSelected={this.state.value.variables}
					onChange={(values)=>{ this.setState({
						value: { ...this.state.value, ...{variables: values}}
					});}}
				/>
			</Flex>
		);
	},
	renderField() {
		const { editorState, currentTabRecipient, currentTabLang } = this.state;
		// const { options } = this.props;
		const { recipients } = this.state.value || {recipients: []};
		return (
			<div>
				<Flex column flex={1} alignItems="stretch" key={"moduleSelectorKey"}>
					{this.renderModuleSelector()}
				</Flex>
				<Flex column flex={1} alignItems="stretch" key={"recipientSelectorKey"}>
					<ListComposer
						allValues={this.state.allRecipients}
						allSelected={this.state.value.recipients}
						onChange={(values)=>{ this.setState({
							value: { ...this.state.value, ...{recipients: values}}
						});}}
						options={{
							handleDefault: true
						}}
					/>
				</Flex>

				<FormInput
					name={this.getInputName(this.props.path)}
					ref="focusTarget"
					value={JSON.stringify(this.state.value)}
					onChange={()=>{}}
					type="hidden"
				/>


				<TabRow
					key={"keyOneTabRow"}
					onChange={this.onTabRecipeintSet}
					tabs={this.state.value && this.state.value.recipients || []}
					selected={this.state.currentTabRecipient}
				/>
				{this.state.value && this.state.value.recipients && this.state.value.recipients.length > 0 &&
				<Flex column flex={1} alignItems="stretch" className={styles.tabContent}>

					{this.renderVariableSelector()}

					<TabRow
						key={"keyTwoTabRow"}
						onChange={this.onTabLangSet}
						tabs={this.state.allLanguages && this.state.allLanguages.values || []}
						selected={this.state.currentTabLang}
					/>
					<Flex column flex={1} alignItems="stretch" className={styles.tabContent}>

						<div style={Object.assign({}, this.props.globalStyle, {
							border: "1px solid gray",
							backgroundColor: "white",
						})}>
							<Editor
								editorState={editorState}
								toolbarClassName="toolbarClassName"
								wrapperClassName="demo-wrapper"
								editorClassName="demo-editor"
								onEditorStateChange={this.onEditorStateChange}
								toolbar={{
									inline: { inDropdown: true },
									list: { inDropdown: true },
									textAlign: { inDropdown: true },
									link: { inDropdown: true },
									history: { inDropdown: true },
								}}

								// name={this.getInputName(this.props.path)}
							/>
						</div>
						<textarea
							disabled
							style={Object.assign({}, this.props.globalStyle, {
								border: "1px solid gray",
								width: "100%",
							})}
							value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
							name={this.getInputName(this.props.path)}
							ref="customEditor"
						/>

					</Flex>
				</Flex>
				}
			</div>
		);
	},
	renderValue () {
		return this.props.value ? (
			<FormInput noedit href={'mailto:' + this.props.value}>{this.props.value}</FormInput>
		) : (
			<FormInput noedit>(not set)</FormInput>
		);
	},
});
