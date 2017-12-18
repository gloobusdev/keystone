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
	if( intoThisArray && intoThisArray.values && Array.isArray(intoThisArray.values) &&
		intoThisArray.values.filter(i=>(i.value === '')).length < 1 ) {
		intoThisArray.values.unshift(newValue);
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
	/**
	 * We have to reset the references because the editors will reinitialize on mount.
	 */
	componentWillUnmount () {
		theSubjectEditor = null;
		theBodyEditor = null;
	},

	//	mixins: [ListComposer],

	/**
	 * When start the module we configure the initial state for everithing.
	 */
	getInitialState() {


		let valueOfState = typeof this.props.values == 'object' && this.props.values.templateContent ?
		this.props.values.templateContent : '{}';

		try { valueOfState = JSON.parse( valueOfState ); }
		catch (e) {
			valueOfState = {}; // do nothig, because wrong or deprecated record. We will save a fresh one when save.
		}

		let module = '';
		if ( !Array.isArray(valueOfState) && typeof valueOfState == 'object' ) {
			module = valueOfState.module || '';
		}

		let allRecipients = this.props && this.props.options && this.props.options.recipients || {values:[]};
		unshifValueIfNotExist(allRecipients, {value:'', label: 'Please select recipient'});

		let allModules = this.props && this.props.options && this.props.options.modules || {values:[]};
		unshifValueIfNotExist(allModules, {value:'', label: 'Please select module'});

		let allLanguages = this.props && this.props.options && this.props.options.languages || {values:[]};

		let moduleRelatedVariables = this.getVariablesListByModuleName(module || '');
		let allVariables = this.props && this.props.options && this.props.options.variables &&
			{...this.props.options.variables, ...moduleRelatedVariables}
		|| {values:[]};

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
	 */
	onTabRemainsSetThatActive() {
		if (!this.state.value || !this.state.value.recipients || this.state.value.recipients.length < 1) {
			this.onTabRecipeintSet(null);
			return;
		}

		const {currentTabRecipient} = this.state;
		let selectedFound = false;
		this.state.value.recipients.forEach((oneRecipient)=>{
			selectedFound = selectedFound || oneRecipient.value === currentTabRecipient.value;
		});

		if (!selectedFound) {
			this.onTabRecipeintSet(this.state.value.recipients[0].value);
		}
	},

	/**
	 * Removed recipients related data have to be removed from memory.
	 */
	onTabClearDataOfDeletedTabs() {
		// if no content then nothing to clear. Terminating this methode.
		if (!this.state.value.content || Object.keys(this.state.value.content).length < 1) { return; }

		const selectedRecips = this.state.value.recipients;
		const allRecips = this.state.allRecipients && this.state.allRecipients.values || [];
		// no recipients declared in schema, or the path of this values misspeld in schema.
		if (!allRecips || !Array.isArray(allRecips) || allRecips.length < 1) { return; }

		// erase all value from content if there are no selected recipients.
		if (!selectedRecips || !Array.isArray(selectedRecips) || selectedRecips.length < 1) {
			Object.keys(this.state.value.content).forEach((key) => { delete this.state.value.content[key]; });
			return; // everithing is cleared. Nothing to do more.
		}

		let foundInSelected = false; // we need a flag for detecting the unused recipients.
		allRecips.forEach((oneOfAll)=>{
			foundInSelected = false; // reset flag to false
			selectedRecips.forEach((oneOfSelected)=>{
				foundInSelected = foundInSelected || oneOfSelected.value === oneOfAll.value;
			});
			if (!foundInSelected && oneOfAll.value !== '' && !!this.state.value.content[oneOfAll.value]) {
				delete this.state.value.content[oneOfAll.value]; // unused recipient data ins tate, so remove that
			}
		});
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
	 * Update the full content of the wysiwyg editor.
	 */
	updateValuesInEditorOnChangeSomething() {
		const subject = this.fetchSafeEditorValue({nameOfTarget: 'subject'});
		this.setContentToSubject(subject);
		const body = this.fetchSafeEditorValue({nameOfTarget: 'body'});
		this.setContentToBody(body);
	},

	/**
	 * Event handling for recipient tab change. Convert sting value to an object and save it in the state.
	 * @param {*} tabName
	 */
	onTabRecipeintSet(tabName) {
		this.setState({
			currentTabRecipient: {value: tabName}
		}, () => {
			this.updateValuesInEditorOnChangeSomething();
		});
	},

	/**
	 * Event handling for lang tab change. Convert sting value to an object and save it in the state.
	 * @param {*} tabName
	 */
	onTabLangSet(tabName) {
		this.setState({
			currentTabLang: {value: tabName}
		}, () => {
			this.updateValuesInEditorOnChangeSomething();
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
	 * This function will refresh the used variable list for editors.
	 * @param {string} moduleName - this is the module wath help us to filter the usable variables.
	 */
	getVariablesListByModuleName( moduleName ) {
		let newVariables = {values:[]};
		let allVariables = this.props && this.props.options && this.props.options.variables || {values:[]};

		if( allVariables && allVariables.values && Array.isArray(allVariables.values) &&
			allVariables.values.length > 0 ) {
			newVariables.values = allVariables.values.filter((item) => {
				return ( item.moduleWhiteList && Array.isArray(item.moduleWhiteList) && item.moduleWhiteList.length > 0 &&
					item.moduleWhiteList.indexOf( moduleName ) !== -1 )
				}
			).map((item)=>{
				return {
					value: item.value,
					label: item.label,
					moduleWhiteList: item.moduleWhiteList || [],
				}
			});
		}
		unshifValueIfNotExist(newVariables, {value:'', label: 'Please select variable'});

		// TODO remove variable also from selected variables.

		return newVariables;
	},

	/**
	 * Update module selector value in state and trigger update also for the props.
	 * @param {*} module
	 */
	selectModule(module) {
		this.setState({
			value: { ...this.state.value, ...{module: module}},
		},() => {
			this.setState({
				allVariables: this.getVariablesListByModuleName(module),
			});
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
			this.onTabClearDataOfDeletedTabs();
		});
	},

	/**
	 * Render the part of variable selector
	 */
	renderVariableSelector() {

		const areVariabels = this.state.allVariables && this.state.allVariables.values &&
			this.state.allVariables.values.length > 0 &&
			this.state.allVariables.values.filter((elem)=>(elem.value !== '')).length > 0 || false;
		return (
			<Flex column flex={1} alignItems="stretch" key={"recipientSelectorKey"}>
				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldTitle}>{"Variables"}</span>
					</Flex>
					<Flex row>
						{areVariabels ?
							(<span className={styles.fieldLabel}>{"Please select variables for this template."}</span>) :
							(<span className={styles.fieldLabel}>{"No variables slotted for this module."}</span>)
						}
					</Flex>
				</Flex>
				{areVariabels && <ListComposer
					allValues={this.state.allVariables}
					allSelected={this.state.value.variables}
					onChange={(values)=>{
						this.setState({
							value: { ...this.state.value, ...{variables: values}}
						});
					}}
				/>}
			</Flex>
		);
	},

	/**
	 * Separate function for insert contetnt to editor by clicking. This was made because on the timeline
	 * of element creation the editor reference created after the variable buttons, and the attached clickhandler.
	 * But this function is given by referenc to onclick handler, and this make possible to call this when ewe have
	 * value in the editor reference variable.
	 * @param {*} ev
	 * @param {*} value
	 */
	insertContentToSubject(ev, value) {
		theSubjectEditor && theSubjectEditor.insertContent('{{'+value+'}}');
	},

	/**
	 * Separate function for insert contetnt to editor by clicking.
	 * @param {*} ev
	 * @param {*} value
	 */
	insertContentToBody(ev, value) {
		theBodyEditor && theBodyEditor.insertContent('{{'+value+'}}');
	},

	/**
	 * Separate function for set contetnt to editor by clicking.
	 * @param {*} ev
	 * @param {*} value
	 */
	setContentToSubject(value) {
		theSubjectEditor && theSubjectEditor.setContent(value);
	},

	/**
	 * Separate function for set contetnt to editor by clicking.
	 * @param {*} ev
	 * @param {*} value
	 */
	setContentToBody(value) {
		theBodyEditor && theBodyEditor.setContent(value);
	},

	/**
	 * This function will render a row of buttons to use for filling an editor.
	 */
	renderButtonRowForFillContent(functionForClick) {
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
						onClick={(ev) => functionForClick(ev, piece.value)}
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
				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldTitle}>{"Email subject"}</span>
					</Flex>
					<Flex row>
						<span className={styles.fieldLabel}>{"Edit subject of the email template."}</span>
					</Flex>
				</Flex>

				{this.renderButtonRowForFillContent(this.insertContentToSubject)}
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

				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldTitle}>{"Email body"}</span>
					</Flex>
					<Flex row>
						<span className={styles.fieldLabel}>{"Edit body of the email template."}</span>
					</Flex>
				</Flex>

				{this.renderButtonRowForFillContent(this.insertContentToBody)}
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
	 * This will render the indextype fields
	 */
	renderIndexType() {
		return (
			<div>
				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldTitle}>{"Indextype"}</span>
					</Flex>
					<Flex row>
						<span className={styles.fieldLabel}>{"Please insert the indextype values for this template."}</span>
					</Flex>
				</Flex>

				<Flex column alignItems="start">
					<Flex row style={{width:"100%"}}>
						<Flex column flex={1} alignItems="start">
							<span className={styles.fieldLabel}>{"Type"}</span>
						</Flex>
						<Flex column flex={3} alignItems="start">
							<FormInput
								value={this.state.value && this.state.value.indexType && this.state.value.indexType.type || ''}
								onChange={(e)=>{
									this.setState({
										value: {...this.state.value,
											...{indexType: {
													type: e.target.value,
													lowValue: this.state.value && this.state.value.indexType && this.state.value.indexType.lowValue || ''
												}
											}
										}
									});
								}}
							/>
						</Flex>
					</Flex>
					<Flex row style={{width:"100%"}}>
						<Flex column flex={1} alignItems="start">
							<span className={styles.fieldLabel}>{"Low value"}</span>
						</Flex>

						<Flex column flex={3} alignItems="start">
							<FormInput
								value={this.state.value && this.state.value.indexType && this.state.value.indexType.lowValue || ''}
								onChange={(e)=>{
									this.setState({
										value: {...this.state.value,
											...{indexType: {
													type:  this.state.value && this.state.value.indexType && this.state.value.indexType.type || '',
													lowValue: e.target.value,
												}
											}
										}
									});
								}}
							/>
						</Flex>

					</Flex>
				</Flex>
			</div>
		);
	},

	/**
	 * Master renderer of the field.
	 */
	renderField() {
		const { currentTabRecipient, currentTabLang } = this.state;
		const { editorLoaded } = this.state;
		const { recipients } = this.state.value || {recipients: []};
		const areEditorsVisible = this.state.value && this.state.value.recipients && this.state.value.recipients.length > 0;

		return (
			<div>
			<Flex column alignItems="start">
				<Flex row>
					<span className={styles.fieldTitle}>{"Module"}</span>
				</Flex>
				<Flex row>
					<span className={styles.fieldLabel}>{"Please select a module for this template."}</span>
				</Flex>
			</Flex>
				<Flex column flex={1} alignItems="stretch" key={"moduleSelectorKey"}>
					{this.renderModuleSelector()}
				</Flex>
				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldTitle}>{"Recipients"}</span>
					</Flex>
					<Flex row>
						<span className={styles.fieldLabel}>{"Please select recipients for this template."}</span>
					</Flex>
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

				<Flex column alignItems="start">
					<Flex row>
						<span className={styles.fieldLabel}>{"You can navigate between recipients by using tabs below."}</span>
					</Flex>
				</Flex>
				<TabRow
					key={"keyOneTabRow"}
					onChange={this.onTabRecipeintSet}
					tabs={this.state.value && this.state.value.recipients || []}
					selected={this.state.currentTabRecipient}
				/>
				<Flex column flex={1} alignItems="stretch"
					className={cs(styles.tabContent, (!areEditorsVisible ? styles.visibleNone : null))}>

					{this.renderVariableSelector()}

					<Flex column alignItems="start">
						<Flex row>
							<span className={styles.fieldTitle}>{"Languages"}</span>
						</Flex>
						<Flex row>
							<span className={styles.fieldLabel}>{"You can navigate between languages by using tabs below."}</span>
						</Flex>
					</Flex>
					<TabRow
						key={"keyTwoTabRow"}
						onChange={this.onTabLangSet}
						tabs={this.state.allLanguages && this.state.allLanguages.values || []}
						selected={this.state.currentTabLang}
					/>

					<Flex column flex={1} alignItems="stretch" className={styles.tabContent}>
						{editorLoaded && this.renderSubjectEditor()}
						{editorLoaded && this.renderBodyEditor()}
						{this.renderIndexType()}
					</Flex>
				</Flex>
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
