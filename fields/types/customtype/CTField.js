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
		let valueOfState = typeof this.props.values == 'object' && this.props.values.templateContent ?
			this.props.values.templateContent : {};

		try {
			valueOfState = JSON.parse( valueOfState );
		}catch(e) {
			// do nothig, because wrong or deprecated record. We will save a fresh one when save.
		}

		return {
			editorState,
			currentTabRecipient: (this.props.value && this.props.value.recipients &&
				this.props.value.recipients.values && this.props.value.recipients.values[0] &&
				this.props.value.recipients.values[0].value) || "",
			currentTabLang: (this.props.options && this.props.options.languages &&
				this.props.options.languages.values && this.props.options.languages.values[0] &&
				this.props.options.languages.values[0].value) || "",
			value: valueOfState,
			allRecipients: allRecipients,
			allModules: allModules,
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
			currentTabRecipient: tabName
		});
	},
	onTabLangSet(tabName) {
		this.setState({
			currentTabLang: tabName
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
					/>
				</Flex>

				<FormInput
					name={this.getInputName(this.props.path)}
					ref="focusTarget"
					value={JSON.stringify(this.state.value)}
					onChange={()=>{}}
					type="textarea"
				/>

				<Flex column flex={1} alignItems="stretch">
					<Item row alignItems="stretch" flex={1} key={"primaryTabs"}>
						{recipients && recipients.map((tab, index) => {
							return (
								<Flex column alignItems="start" key={"primaryTabNumber"+index}
									className={cs(styles.tab, styles.noselect, (tab.value === currentTabRecipient) ? styles.active : null)}
									onClick={(ev)=>{this.onTabRecipeintSet(tab.value)}}
								>
									{tab.label}
								</Flex>
							);
						})}
					</Item>
					<Item row alignItems="stretch" flex={1} key={"primaryTabContents"}>
						{recipients && recipients.filter((tab, index) => (tab.name === currentTabRecipient))
							.map((tab, index) => {
								return (
									<Flex column alignItems="start" flex={1} key={"primaryTabContentNumber"+index}
										className={cs(styles.tabContent)}
									>
										{this.renderSecondLevelTabs()}
									</Flex>
								);
							})
					}
					</Item>
				</Flex>

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
