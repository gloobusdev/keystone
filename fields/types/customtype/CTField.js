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

import TinyMce from 'react-tinymce';
import $script from 'scriptjs';

import ListComposer from './ListComposer';
import TabRow from './TabRow';

/**
 * This function will insert a value to the begining of the array if not exist with the same value
 * (there are no return value because the array is given by address).
 * @param {Object} intoThisArray - this is an object contains the array on "values" property. That array
 * are elements type object like this: {value:<String>, label:<String>}
 * @param {Object} newValue
 */
const unshifValueIfNotExist = (intoThisArray, newValue) => {
	if( intoThisArray.values.filter(i=>(i.value === '')).length < 1 ) {
		intoThisArray.values.unshift({value:'', label: 'Please select recipient'});
	}
};

let editorLoaded = !!global.tinymce;
let theSubjectEditor, theBodyEditor;

module.exports = Field.create({
	displayName: 'Custom Type',
	/* propTypes: {
		formatString: React.PropTypes.object,
	}, */
	statics: {
		type: 'CT',
	},


	// focusTargetRef: 'customEditor', // TODO set focused the first input. Give a ref for it

	loadEditor () {
		$script(`${Keystone.adminPath}/lib/tinymce/tinymce.min.js`, () => {
			this.setState({ editorLoaded: true });
		});
	},
	componentDidMount () {
		if (!this.state.editorLoaded) {
			this.loadEditor();
		}
	},

	//	mixins: [ListComposer],

	/**
	 * When start the module we configure the initial state for everithing.
	 */
	getInitialState() {
		let module = '';
		if ( !Array.isArray(this.props.value) && typeof this.props.value == 'object' ) {
			module = this.props.value.module;
		}
		let allRecipients = this.props && this.props.options && this.props.options.recipients || {values:[]};
		unshifValueIfNotExist(allRecipients, {value:'', label: 'Please select recipient'});

		let allModules = this.props && this.props.options && this.props.options.modules || {values:[]};
		unshifValueIfNotExist(allModules, {value:'', label: 'Please select module'});

		let allLanguages = this.props && this.props.options && this.props.options.languages || {values:[]};

		let allVariables = this.props && this.props.options && this.props.options.variables || {values:[]};
		unshifValueIfNotExist(allVariables, {value:'', label: 'Please select variable'});

		let valueOfState = typeof this.props.values == 'object' && this.props.values.templateContent ?
			this.props.values.templateContent : '{}';

		try { valueOfState = JSON.parse( valueOfState ); }
		catch (e) {
			valueOfState = {}; // do nothig, because wrong or deprecated record. We will save a fresh one when save.
		}

		const currentTabRecipient = valueOfState && valueOfState.recipients &&
			Array.isArray(valueOfState.recipients) && valueOfState.recipients.length > 0 &&
			valueOfState.recipients[0] || {value: ''};

		const currentTabLang = allLanguages && allLanguages.values &&
			Array.isArray(allLanguages.values) && allLanguages.values.length > 0 &&
			allLanguages.values[0] || {value: ''};

		return {
			currentTabRecipient: currentTabRecipient,
			currentTabLang: currentTabLang,
			value: valueOfState,
			allRecipients: allRecipients,
			allModules: allModules,
			allLanguages: allLanguages,
			allVariables: allVariables,
			editorLoaded,
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

	/**
	 * Find a tab to set active. Not done actually.
	 * TODO Please solve if we have no active tab set the last active.
	 */
	onTabRemainsSetThatActive() {
		if (this.state.value && this.state.value.recipients && this.state.value.recipients.length === 1) {
			this.onTabRecipeintSet(this.state.value.recipients[0].value);
		}
	},

	/**
	 * Save the email contents to the correct "coordinates" of recipients and languages
	 * @param {object} e - the event object of the editors onchange
	 */
	onEditorStateChange({e, nameOfTarget}) {
		// preparing initial values from state to save the editors value
		const content = this.state.value.content || {};
		const {currentTabRecipient, currentTabLang} = this.state;

		// finding indexes to save the editors contents, on each language and recipent intersects
		const recipientIndex = currentTabRecipient && currentTabRecipient.value || false;
		const languageIndex = currentTabLang && currentTabLang.value || false;
		const targetWhiteList = ['body', 'subject'];

		// we have no valid conditions tyo save the editors value!!!
		if( !currentTabRecipient || !currentTabLang || !nameOfTarget ||
			targetWhiteList.indexOf(nameOfTarget) === -1 ) {
			return false;
		}

		// make sure if exists and is an object
		content[recipientIndex] = content[recipientIndex] ? content[recipientIndex] : {};
		content[recipientIndex][languageIndex] = content[recipientIndex][languageIndex] ? content[recipientIndex][languageIndex] : {};
		content[recipientIndex][languageIndex][nameOfTarget] = e.target.getContent();

		// update value in the current state of component.
		this.setState({
			value: {
				...this.state.value,
				...{content: content}
			}
		});

		// update value in the props for store in the store. Support value for keystone.
		this.props.onChange({
			path: this.props.path,
			value: {
				...this.state.value,
				...{content: content}
			}
		});
	},

	/**
	 * Event handling for recipient tab change. Convert sting value to an object and save it in the state.
	 * @param {*} tabName
	 */
	onTabRecipeintSet(tabName) {
		this.setState({
			currentTabRecipient: {value: tabName}
		});
	},

	/**
	 * Event handling for lang tab change. Convert sting value to an object and save it in the state.
	 * @param {*} tabName
	 */
	onTabLangSet(tabName) {
		this.setState({
			currentTabLang: {value: tabName}
		});
	},

	/**
	 * Update in props a changed value to provide it for keystone.
	 * @param {object} changedProp
	 */
	updateValue (changedProp) {
		this.props.onChange({ ...this.props.value, ...changedProp });
	},

	/**
	 * Update module selector value in state and trigger update also for the props.
	 * @param {*} module
	 */
	selectModule(module) {
		this.setState({
			value: { ...this.state.value, ...{module: module}},
		});
		this.updateValue({ module });
	},

	/**
	 * Rendering module selector
	 */
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

	/**
	 * Update recipient list in the state and find another active tab if the removed one was the active.
	 */
	onChangeRecipients(values) {
		this.setState({
			value: { ...this.state.value, ...{recipients: values}}
		}, () => {
			this.onTabRemainsSetThatActive();
		});
	},

	/**
	 * Render the part of variable selector
	 */
	renderVariableSelector() {
		// TODO filter the variables by module whitelist what is contained in allVariables elements.
		// Come from the schema options variable modulewhitelist
		return(
			<Flex column flex={1} alignItems="stretch" key={"recipientSelectorKey"}>
				<span className={styles.fieldLabel}>{"Variable list for this recipient"}</span>
				<ListComposer
					allValues={this.state.allVariables}
					allSelected={this.state.value.variables}
					onChange={(values)=>{
						this.setState({
							value: { ...this.state.value, ...{variables: values}}
						});
					}}
				/>
			</Flex>
		);
	},

	/**
	 * This function will render a row of buttons to use for filling an editor.
	 */
	renderButtonRowForFillContent(editor) {

		if(!editor) { return; } // no editor no variable insertion

		const pieces = !!this.state.value.variables &&
			Array.isArray(this.state.value.variables) &&
			this.state.value.variables.length > 0 &&
			this.state.value.variables || [];

		return (
			<Flex column flex={1} alignItems="stretch">
				<Flex row alignItems="stretch" flex={1} key={"buttonRow"}>
				{pieces && pieces.map((piece, index) => (
					<Flex column alignItems="start" key={"buttonRowElem"+index}
						className={cs(styles.variableValueInserter, styles.noselect)}
						onClick={(ev)=>{editor.insertContent('{{'+piece.value+'}}')}}
					>
						<Flex row>
							<Flex column>
								{piece.label}
							</Flex>
							<Flex column>
								<span className={cs("octicon", "octicon-tag", styles.downArrowIcon)}/>
							</Flex>
						</Flex>
					</Flex>
				))}
				</Flex>
			</Flex>
		);
	},

	/**
	 * Gettin value from state to the current combination if the recipient, language and template part.
	 * @param {*} param0
	 */
	fetchSafeEditorValue({nameOfTarget}) {
		const content = this.state.value.content || {};
		const { currentTabRecipient, currentTabLang } = this.state;
		const curRecValue = currentTabRecipient.value || false;
		const curLangValue = currentTabLang.value || false;
		let editorState = '';

		const targetWhiteList = ['body', 'subject'];

		// we have no valid conditions tyo save the editors value!!!
		if( !curRecValue || !curLangValue || !nameOfTarget ||
			targetWhiteList.indexOf(nameOfTarget) === -1 ) {
			return editorState;
		}

		content[curRecValue] = !!content[curRecValue] ? content[curRecValue] : {};
		content[curRecValue][curLangValue] = !!content[curRecValue][curLangValue] ? content[curRecValue][curLangValue] : {
			subject: '', body: ''
		};
		editorState = content[curRecValue][curLangValue][nameOfTarget] || '';

		return editorState;
	},

	/**
	 * Rendering the subject editor of template
	 */
	renderSubjectEditor() {
		const editorState = this.fetchSafeEditorValue({nameOfTarget: 'subject'});

		return (
			<div>
				<span className={styles.fieldLabel}>{"Edit subject of the email template."}</span>
				{this.renderButtonRowForFillContent(theSubjectEditor)}
				<TinyMce
					ref="customEditor"
					onChange={(e) => this.onEditorStateChange({e, nameOfTarget: "subject"})}
					config={{
						menubar: false,
						toolbar: 'undo redo',
						setup: (editor) => {
							theSubjectEditor = !theSubjectEditor ? editor : theSubjectEditor;
						}
					}}
					content={editorState}
				/>
			</div>
		);
	},

	/**
	 * Rendering the emailbody editor of template
	 */
	renderBodyEditor() {
		const editorState = this.fetchSafeEditorValue({nameOfTarget: 'body'});

		return (
			<div>
				<span className={styles.fieldLabel}>{"Edit body of the email template."}</span>
				{this.renderButtonRowForFillContent(theBodyEditor)}
				<TinyMce
					ref="customEditor2"
					onChange={(e) => this.onEditorStateChange({e, nameOfTarget: "body"})}
					config={{
						menubar: false,
						toolbar: 'undo redo | bold italic underline strikethrough | alignleft aligncenter alignright | styleselect',
						setup: (editor) => {
							theBodyEditor = !theBodyEditor ? editor : theBodyEditor;
						}
					}}
					content={editorState}
				/>
			</div>
		)
	},

	/**
	 * Master renderer of the field.
	 */
	renderField() {
		const { currentTabRecipient, currentTabLang } = this.state;
		const { editorLoaded } = this.state;
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
						onChange={this.onChangeRecipients}
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

						{editorLoaded && this.renderSubjectEditor()}
						{editorLoaded && this.renderBodyEditor()}

					</Flex>
				</Flex>
				}
			</div>
		);
	},

	/**
	 * This is the render value methode used somwhere, this is not ready. I have no idea wheere to use and how.
	 * TODO implement it, find functionality!
	 */
	renderValue () {
		return this.props.value ? (
			<FormInput noedit href={'mailto:' + this.props.value}>{this.props.value}</FormInput>
		) : (
			<FormInput noedit>(not set)</FormInput>
		);
	},
});
